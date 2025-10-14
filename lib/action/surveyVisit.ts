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

export async function toggleFileUpload(
  surveyVisitId: string,
  allowFileUploads: boolean
) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      allowFileUploads: !allowFileUploads,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function toggleEdit(surveyVisitId: string, allowEdits: boolean) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      allowEdits: !allowEdits,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function toggleSelfSurvey(
  surveyVisitId: string,
  openForSelfSurvey: boolean
) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      openForSelfSurvey: !openForSelfSurvey,
      allowFileUploads: false,
      allowEdits: false,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
