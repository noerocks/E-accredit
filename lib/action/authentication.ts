"use server";

import { z } from "zod";
import { LoginFormSchema, RegisterFormSchema } from "../zod-definitions";
import { prisma } from "../prisma";
import bcrypt from "bcrypt";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { createSession } from "./session";
import { redirect } from "next/navigation";
import { accessControl } from "../access-control";

export async function login({
  email,
  password,
}: z.infer<typeof LoginFormSchema>) {
  const result = LoginFormSchema.safeParse({ email, password });
  if (!result.success)
    return {
      status: "error",
      message: "Invalid form data",
    };
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user)
    return {
      status: "error",
      message: "Email is not registered",
    };
  const passwordsMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordsMatch)
    return {
      status: "error",
      message: "Incorrect password",
    };
  await createSession({
    id: user.id,
    email: user.email,
    role: user.role,
    name: `${user.firstName} ${user.lastName}`,
  });
  redirect(accessControl[user.role][0]);
}

export async function register({
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  confirm,
}: z.infer<typeof RegisterFormSchema>) {
  const result = RegisterFormSchema.safeParse({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirm,
  });
  if (!result.success)
    return {
      status: "error",
      message: "Invalid form data",
    };
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await prisma.user.create({
      data: { firstName, lastName, phoneNumber, email, hashedPassword },
    });
    console.log(newUser);
    return {
      status: "success",
      message: "Register successful",
    };
  } catch (error: unknown) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      const duplicateField = (e?.meta?.target as string[])[0];
      switch (duplicateField) {
        case "phoneNumber":
          return {
            status: "error",
            message: "Phone number is already taken",
          };
        case "email": {
          return {
            status: "erorr",
            message: "Email is already taken",
          };
        }
        case "id": {
          return {
            status: "error",
            message: "ID must be unique",
          };
        }
      }
    }
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
