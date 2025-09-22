"use server";

import { z } from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { createProgram as createProgramDAL } from "../dal/program";
import { revalidateTag } from "next/cache";
import { createFolder } from "./drive";
import { CreateAccreditation } from "../dal/accreditation";

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
    const folder = await createFolder(data.code);
    if (!folder.id) throw new Error("Failed to create folder");
    const program = await createProgramDAL({ ...data, folderId: folder.id });
    if (!program) throw new Error("Failed to create program");
    await CreateAccreditation(program.id);
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
      status: (error as Error).message,
      message: "Failed to create program",
    };
  }
}
