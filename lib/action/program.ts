"use server";

import { z } from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { createProgram as createProgramDAL } from "../dal/program";
import { revalidateTag } from "next/cache";

export async function createProgram(
  data: z.infer<typeof CreateProgramFormSchema>
) {
  const result = CreateProgramFormSchema.safeParse(data);
  if (!result.success)
    return {
      status: "error",
      message: "Invalid form data",
    };
  try {
    await createProgramDAL(data);
    revalidateTag("programs");
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
