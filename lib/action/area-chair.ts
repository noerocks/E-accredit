"use server";

import { revalidateTag } from "next/cache";
import {
  createNewAreaChair,
  deleteAreaChairById,
  deleteCurrentAreaChair,
  updateSurveyTeamById,
} from "../dal/area-chair";
import { SurveyTeamType } from "../generated/prisma";

export async function assignAreaChair(
  userId: string | undefined,
  type: SurveyTeamType,
  surveyTeamId: string | undefined,
  areaFolderId: string | undefined,
  areaChairId?: string | undefined
) {
  if (!userId || !surveyTeamId || !areaFolderId)
    return { failure: { error: "Invalid input" } };
  try {
    await deleteCurrentAreaChair(surveyTeamId, type);
    const areaChair = await createNewAreaChair(
      userId,
      surveyTeamId,
      areaFolderId
    );
    revalidateTag("surveyVisitSurvey");
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

export async function assignCoordinator(
  userId: string,
  type: SurveyTeamType,
  surveyTeamId: string
) {
  if (!userId || !type || !surveyTeamId)
    return { failure: { error: "Invalid input" } };
  try {
    await updateSurveyTeamById({
      id: surveyTeamId,
      teamLeadId: userId,
    });
    revalidateTag("surveyVisitSurvey");
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
