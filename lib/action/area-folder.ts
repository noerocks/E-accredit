"use server";

import { revalidateTag } from "next/cache";
import { AuditAction, AuditEntity, Progress } from "../generated/prisma";
import { getAreaFolderById, updateAreaFolderById } from "../dal/area-folder";
import { createActivity } from "../dal/audit";
import { verifySession } from "./session";

export async function markAsComplete(
  areaFolderId: string,
  surveyVisitId: string
) {
  try {
    const { user } = await verifySession();
    const areaFolder = await updateAreaFolderById({
      id: areaFolderId,
      status: Progress.COMPLETE,
    });
    if (!areaFolder) return { failure: { error: "Failed to update area" } };
    const areaStructure = await getAreaFolderById(areaFolder.id);
    await createActivity({
      actorId: user.id,
      action: AuditAction.AREA_REVIEW,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: surveyVisitId,
      description: `Marked as done: ${areaStructure?.area?.label}`,
    });
    revalidateTag("activities");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Area folder is marked as complete" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
