import "server-only";
import { cache } from "react";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { UserProfileDTO, UsersDTO } from "../dto/user";
import z from "zod";
import { RegisterFormSchema } from "../zod-definitions";
import { unstable_cache } from "next/cache";

export async function findByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export async function createUser({
  password,
  ...rest
}: z.infer<typeof RegisterFormSchema>) {
  const newUser = await prisma.user.create({
    data: { hashedPassword: password, ...rest },
  });
  return newUser;
}

export const getUserProfile = cache(
  async (): Promise<UserProfileDTO | null> => {
    const session = await verifySession();
    if (!session) return null;
    try {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });
      if (!user) return null;
      return {
        email: user.email,
        fullName: `${user.firstName} ${user.lastName}`,
        photoURL: user?.photoURL,
      };
    } catch (error) {
      console.log("Failed to fetch user");
      return null;
    }
  }
);

export const getUsers = unstable_cache(
  async (): Promise<UsersDTO[] | null> => {
    try {
      const users = await prisma.user.findMany();
      return users.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        registrationDate: user.createdAt,
        role: user.role,
      }));
    } catch (error) {
      console.log("Failed to fetch users");
      return null;
    }
  },
  ["users"],
  {
    tags: ["users"],
  }
);

export const getPendingUserCount = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  try {
    const count = await prisma.user.count({
      where: { role: "PENDING" },
    });
    return count;
  } catch (error) {
    console.log("Failed to fetch pending user count");
    return null;
  }
});

export const getPendingUsers = unstable_cache(
  async (): Promise<UsersDTO[] | null> => {
    try {
      const pendingUsers = await prisma.user.findMany({
        where: {
          role: "PENDING",
        },
      });
      return pendingUsers.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        registrationDate: user.createdAt,
        role: user.role,
      }));
    } catch (error) {
      console.log("Failed to fetch pending users");
      return null;
    }
  },
  ["pendingUsers"],
  {
    tags: ["pendingUsers"],
  }
);

export async function rejectUser(id: string) {
  const session = await verifySession();
  if (session.user.role !== "ADMIN") return { unauthorized: true };
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}
