"use server";

import { revalidateTag } from "next/cache";
import { updateParameterFolderById } from "../dal/parameter-folder";
import { Progress } from "../generated/prisma";

export async function markAsComplete(parameterFolderId: string | undefined) {
  if (!parameterFolderId) return { failure: { error: "Id is required" } };
  const parameterFolder = await updateParameterFolderById({
    id: parameterFolderId,
    status: Progress.COMPLETE,
  });
  revalidateTag("parameterFolder");
  return { success: { message: "Parameter folder is marked as complete" } };
}
