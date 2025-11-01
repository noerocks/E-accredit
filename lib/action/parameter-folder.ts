"use server";

import { revalidateTag } from "next/cache";
import {
  getParameterFolderById,
  updateParameterFolderById,
} from "../dal/parameter-folder";
import { AuditAction, AuditEntity, Progress } from "../generated/prisma";
import { createActivity } from "../dal/audit";
import { verifySession } from "./session";

export async function markAsComplete(
  parameterFolderId: string,
  surveyVisitId: string
) {
  try {
    const { user } = await verifySession();
    const parameterFolder = await updateParameterFolderById({
      id: parameterFolderId,
      status: Progress.COMPLETE,
    });
    if (!parameterFolder)
      return { failure: { error: "Failed to update parameter" } };
    const parameterStructure = await getParameterFolderById(
      parameterFolder?.id
    );
    await createActivity({
      actorId: user.id,
      action: AuditAction.PARAMETER_REVIEW,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: surveyVisitId,
      description: `Marked as done: ${parameterStructure?.areaFolder.area.label} > ${parameterStructure?.parameter.label}`,
    });
    revalidateTag("activities");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Parameter folder is marked as complete" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
