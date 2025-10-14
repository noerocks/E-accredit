"use server";

import { revalidateTag } from "next/cache";
import { updateParameterFolderById } from "../dal/parameter-folder";
import { Progress } from "../generated/prisma";

export async function markAsComplete(parameterFolderId: string) {
  try {
    const parameterFolder = await updateParameterFolderById({
      id: parameterFolderId,
      status: Progress.COMPLETE,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Parameter folder is marked as complete" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
