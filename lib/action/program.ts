"use server";

import { z } from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import {
  createProgram as createProgramDAL,
  getProgramCurrentAccreditation,
} from "../dal/program";
import { revalidateTag } from "next/cache";
import { createAccreditation } from "../dal/accreditation";
import { AccreditationStatus } from "../generated/prisma";

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
    const program = await createProgramDAL(data);
    if (!program) throw new Error("Failed to create program");
    await createAccreditation(program.id, AccreditationStatus.UNACCREDITED);
    revalidateTag("accreditations");
    revalidateTag("programs");
    return {
      status: "success",
      message: "Program created successfuly",
    };
  } catch (error) {
    console.log((error as Error).message);
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      return {
        status: "error",
        message: "Program already exists",
      };
    }
    return {
      status: (error as Error).message,
      message: "Failed to create program",
    };
  }
}

export async function getProgramCurrentAccredidtationStatus(id: string) {
  if (!id) return null;
  const program = await getProgramCurrentAccreditation(id);
  return program?.accreditation?.level?.rank;
}
