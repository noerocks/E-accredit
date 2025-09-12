"use server";

import z from "zod";
import {
  createProgramPersonnel,
  deleteProgramPersonnelById,
} from "../dal/program-personnel";
import { AddProgramPersonnelFormSchema } from "../zod-definitions";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { revalidateTag } from "next/cache";

export async function AddProgramPersonnel(
  programId: string,
  data: z.infer<typeof AddProgramPersonnelFormSchema>
) {
  const result = AddProgramPersonnelFormSchema.safeParse(data);
  if (!result.success) return { status: "error", message: "Invalid form data" };
  try {
    const programPersonnel = await createProgramPersonnel(
      programId,
      data.userId
    );
    if (
      programPersonnel &&
      "unauthorized" in programPersonnel &&
      programPersonnel.unauthorized
    ) {
      return {
        status: "error",
        message: "Unauthorized action",
      };
    }
    revalidateTag("programPersonnel");
    return {
      status: "success",
      message: "Program Personnel assigned successfuly",
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      return {
        status: "error",
        message: "This person is already assigned to this program",
      };
    }
  }
}

export async function removeProgramPersonnel(personnelId: string | undefined) {
  try {
    if (!personnelId)
      return { status: "error", message: "Personnel id is required" };
    const programPersonnel = await deleteProgramPersonnelById(personnelId);
    if (
      programPersonnel &&
      "unauthorized" in programPersonnel &&
      programPersonnel.unauthorized
    )
      return {
        status: "error",
        message: "Unauthorized action",
      };
    revalidateTag("programPersonnel");
    return {
      status: "success",
      message: "Personnel successfuly removed",
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2025") {
      return {
        status: "error",
        message: "Program personnel with the provided ID not found",
      };
    }
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
