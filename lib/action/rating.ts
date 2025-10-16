"use server";

import { revalidateTag } from "next/cache";
import {
  createNewRating,
  evidenceFileIsRated,
  resetRatingById,
  updateRatingById,
} from "../dal/rating";
import { SurveyTeamType } from "../generated/prisma";

export async function giveRating({
  evidenceFileId,
  type,
  accreditorId,
  adequacy = null,
  effectiveness = null,
  finalRate = null,
  NA = null,
}: {
  evidenceFileId: string;
  type: SurveyTeamType;
  accreditorId: string;
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
    const ratedEvidence = await evidenceFileIsRated(evidenceFileId, type);
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
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
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
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      return { success: { message: "Rating Updated" } };
    }
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
