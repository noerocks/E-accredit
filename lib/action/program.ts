"use server";

import { z } from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { prisma } from "../prisma";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { verifySession } from "./session";

export async function createProgram(
  data: z.infer<typeof CreateProgramFormSchema>
) {
  const session = await verifySession();
  if (!session) return null;
  if (session.user.role !== "ADMIN") return null;
  const result = CreateProgramFormSchema.safeParse(data);
  if (!result.success)
    return {
      status: "error",
      message: "Invalid form data",
    };
  try {
    await prisma.program.create({
      data,
    });
    return {
      status: "success",
      message: "Program created successfuly",
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      return {
        status: "error",
        message: "Program already exists",
      };
    }
    return {
      status: "error",
      message: "Failed to create program",
    };
  }
}
