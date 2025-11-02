"use server";

import { revalidateTag } from "next/cache";
import {
  createNewRating,
  evidenceFileIsRated,
  resetRatingById,
  updateRatingById,
} from "../dal/rating";
import { AuditAction, AuditEntity, SurveyTeamType } from "../generated/prisma";
import { createActivity } from "../dal/audit";
import { verifySession } from "./session";
import { getEvidenceFileById } from "../dal/evidence";

export async function giveRating({
  evidenceFileId,
  type,
  accreditorId,
  portfolioId,
  adequacy = null,
  effectiveness = null,
  finalRate = null,
  NA = null,
}: {
  evidenceFileId: string;
  type: SurveyTeamType;
  accreditorId: string;
  portfolioId: string;
  adequacy?: number | null;
  effectiveness?: number | null;
  finalRate?: number | null;
  NA?: boolean | null;
}) {
  if (
    !evidenceFileId ||
    !type ||
    !accreditorId ||
    (adequacy === null &&
      effectiveness === null &&
      NA === null &&
      finalRate === null)
  )
    return {
      failure: {
        error: "Invalid input",
      },
    };
  try {
    const { user } = await verifySession();
    const ratedEvidence = await evidenceFileIsRated(evidenceFileId, type);
    const evidenceFile = await getEvidenceFileById(evidenceFileId);
    if (!ratedEvidence) {
      const rating = await createNewRating({
        evidenceFileId,
        type,
        accreditorId,
        adequacy,
        effectiveness,
        finalRate,
        NA,
      });
      if (type === "INTERNAL") {
        await createActivity({
          actorId: user.id,
          action: AuditAction.RATE,
          entity: AuditEntity.SELF_SURVEY,
          portfolioId: portfolioId,
          description: `Rated evidence file in ${evidenceFile.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${evidenceFile.indicatorFolder?.parameterFolder.parameter.label} > ${evidenceFile.indicator?.label}`,
        });
      } else if (type === "EXTERNAL") {
        await createActivity({
          actorId: user.id,
          action: AuditAction.RATE,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId: portfolioId,
          description: `Rated evidence file in ${evidenceFile.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${evidenceFile.indicatorFolder?.parameterFolder.parameter.label} > ${evidenceFile.indicator?.label}`,
        });
      }
      revalidateTag("activities");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      revalidateTag("surveyVisitStructure");
      return { success: { message: "Rating Submitted" } };
    } else {
      await resetRatingById(ratedEvidence?.id!);
      const updatedRating = await updateRatingById({
        id: ratedEvidence?.id!,
        adequacy,
        effectiveness,
        finalRate,
        NA,
      });
      if (type === "INTERNAL") {
        await createActivity({
          actorId: user.id,
          action: AuditAction.RATE,
          entity: AuditEntity.SELF_SURVEY,
          portfolioId: portfolioId,
          description: `Edited rating in ${evidenceFile.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${evidenceFile.indicatorFolder?.parameterFolder.parameter.label} > ${evidenceFile.indicator?.label}`,
        });
      } else if (type === "EXTERNAL") {
        await createActivity({
          actorId: user.id,
          action: AuditAction.RATE,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId: portfolioId,
          description: `Edited rating in ${evidenceFile.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${evidenceFile.indicatorFolder?.parameterFolder.parameter.label} > ${evidenceFile.indicator?.label}`,
        });
      }
      revalidateTag("activities");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      revalidateTag("surveyVisitStructure");
      return { success: { message: "Rating Updated" } };
    }
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
