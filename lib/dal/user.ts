import "server-only";
import { cache } from "react";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { userProfileDTO, usersDTO } from "../dto/user";
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

export const getUserProfile = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!user) return null;
    return userProfileDTO(user);
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});

export const getUsers = unstable_cache(
  async () => {
    try {
      const users = await prisma.user.findMany();
      return usersDTO(users);
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
