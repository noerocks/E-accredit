"use server";

import { z } from "zod";
import { LoginFormSchema, RegisterFormSchema } from "../zodDefinitions";
import bcrypt from "bcrypt";
import { prisma } from "../prisma";
import { Prisma } from "../generated/prisma";

export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
  const result = RegisterFormSchema.safeParse(values);
  if (!result.success) {
    return { status: "error", message: "Invalid form data" };
  }
  const { firstName, lastName, phoneNumber, email, password } = values;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await prisma.user.create({
      data: { firstName, lastName, phoneNumber, email, hashedPassword },
    });
    console.log(newUser);
    return { status: "success", message: "Register successul" };
  } catch (error: unknown) {
    const e = error as Prisma.PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      switch ((e?.meta?.target as string[])[0]) {
        case "phoneNumber":
          return {
            status: "error",
            message: "Phone number is already taken.",
          };
        case "email":
          return {
            status: "error",
            message: "Email is already taken.",
          };
      }
    }
    return {
      status: "error",
      message: "Something went wrong.",
    };
  }
};

export const login = async ({
  email,
  password,
}: z.infer<typeof LoginFormSchema>) => {
  const result = LoginFormSchema.safeParse({ email, password });
  if (!result.success) {
    return {
      status: "error",
      message: "Invalid form data",
    };
  }
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user)
    return {
      status: "error",
      message: "Email is not registered.",
    };

  const passwordsMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordsMatch) return { status: "error", message: "Invalid password" };
  return {
    status: "success",
    message: "Login successful",
  };
};
