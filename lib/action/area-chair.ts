"use server";

import { revalidateTag } from "next/cache";
import {
  createNewAreaChair,
  deleteAreaChairById,
  deleteCurrentAreaChair,
} from "../dal/area-chair";
import { SurveyTeamType } from "../generated/prisma";

export async function assignAreaChair(
  userId: string | undefined,
  type: SurveyTeamType,
  surveyTeamId: string | undefined,
  areaFolderId: string | undefined,
  areaChairId?: string | undefined
) {
  console.log(userId, surveyTeamId, areaFolderId);
  if (!userId || !surveyTeamId || !areaFolderId)
    return { failure: { error: "Invalid input" } };
  try {
    await deleteCurrentAreaChair(surveyTeamId, type);
    const areaChair = await createNewAreaChair(
      userId,
      surveyTeamId,
      areaFolderId
    );
    revalidateTag("evidenceFiles");
    revalidateTag("areaFolder");
    revalidateTag("parameterFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Area chair assigned successfully" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
