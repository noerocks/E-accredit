"use server";

import { revalidateTag } from "next/cache";
import { updateEvidenceFileById } from "../dal/evidence-file";
import { AuditAction, AuditEntity, FileStatus } from "../generated/prisma";
import { rejectActiveVersion } from "../dal/file-version";
import { createActivity } from "../dal/audit";
import { verifySession } from "./session";
import { getEvidenceFileById } from "../dal/evidence";

export async function acceptOrReject(
  evidenceFileId: string,
  action: string,
  surveyVisitId: string
) {
  if (!evidenceFileId || !action)
    return { failure: { error: "Invalid Input" } };
  try {
    let status;
    const { user } = await verifySession();
    const file = await getEvidenceFileById(evidenceFileId);
    switch (action) {
      case "accept": {
        status = FileStatus.ACCEPTED;
        await createActivity({
          actorId: user.id,
          action: AuditAction.FILE_REVIEW,
          entity: AuditEntity.PORTFOLIO,
          portfolioId: surveyVisitId,
          description: `Accepted evidence file in ${file.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${file.indicatorFolder?.parameterFolder.parameter.label} > ${file.indicator?.label}`,
        });
        break;
      }
      case "reject": {
        status = FileStatus.REJECTED;
        await createActivity({
          actorId: user.id,
          action: AuditAction.FILE_REVIEW,
          entity: AuditEntity.PORTFOLIO,
          portfolioId: surveyVisitId,
          description: `Rejected evidence file in ${file.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${file.indicatorFolder?.parameterFolder.parameter.label} > ${file.indicator?.label}`,
        });
        break;
      }
    }
    const evidenceFile = await updateEvidenceFileById({
      id: evidenceFileId,
      status,
    });
    if (status === FileStatus.REJECTED) {
      await rejectActiveVersion(evidenceFileId);
    }
    revalidateTag("activities");
    revalidateTag("evidenceFiles");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: `File version ${action}d` } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
