"use server";

import { revalidateTag } from "next/cache";
import { Progress } from "../generated/prisma";
import { updateSurveyVisitById } from "../dal/survey-visit";

export async function markAsComplete(surveyVisitId: string) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
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
