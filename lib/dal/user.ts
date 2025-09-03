import "server-only";
import { cache } from "react";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { DisplayUserDTO } from "../dto/user";
import z from "zod";
import { RegisterFormSchema } from "../zod-definitions";

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

export const getDisplayUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!user) return null;
    return DisplayUserDTO(user);
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
