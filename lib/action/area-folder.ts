"use server";

import { revalidateTag } from "next/cache";
import { Progress } from "../generated/prisma";
import { updateAreaFolderById } from "../dal/area-folder";

export async function markAsComplete(areaFolderId: string) {
  try {
    const areaFolder = await updateAreaFolderById({
      id: areaFolderId,
      status: Progress.COMPLETE,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Area folder is marked as complete" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
