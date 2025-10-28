"use server";

import { revalidateTag } from "next/cache";
import {
  Progress,
  SurveyResultStatus,
  SurveyStatus,
  SurveyVisitType,
} from "../generated/prisma";
import { updateSurveyVisitById } from "../dal/survey-visit";
import { AreaFolderDTO } from "../dto/accreditation-instrument";
import { resetAreaRatings } from "../dal/rating";
import { updateAreaFolderById } from "../dal/area-folder";

export async function markAsComplete(surveyVisitId: string) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      status: Progress.COMPLETE,
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return {
      success: { message: "Survey Visit Portfolio is marked as complete" },
    };
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
    return {
      success: {
        message: !allowFileUploads
          ? "File uploads are enabled"
          : "File uploads are disabled",
      },
    };
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
    return {
      success: {
        message: !allowEdits
          ? "File edits are enabled"
          : "File edits are disabled",
      },
    };
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
      selfSurveyStatus: SurveyStatus.ON_GOING,
      selfSurveyStartedAt: new Date(),
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return { success: { message: "Program is now open for self survey" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function toggleActualSurvey(
  surveyVisitId: string,
  openForActualSurvey: boolean
) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      openForActualSurvey: !openForActualSurvey,
      allowFileUploads: false,
      allowEdits: false,
      actualSurveyStatus: SurveyStatus.ON_GOING,
      actualSurveyStartedAt: new Date(),
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return { success: { message: "Program is now open for actual survey" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function endSelfSurvey(surveyVisitId: string) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      selfSurveyStatus: SurveyStatus.COMPLETE,
      openForSelfSurvey: false,
      selfSurveyEndedAt: new Date(),
    });
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return { success: { message: "Actual survey has now ended" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function endActualSurvey(surveyVisitId: string) {
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      actualSurveyStatus: SurveyStatus.COMPLETE,
      actualSurveyEndedAt: new Date(),
    });
    revalidateTag("parameterFolder");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return { success: { message: "Self survey has now ended" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function scheduleActualSurveyRevisit(
  surveyVisitId: string,
  failedAreas: AreaFolderDTO[],
  revisitDate: Date
) {
  if (!surveyVisitId || !failedAreas || !revisitDate)
    return { failure: { error: "Invalid input" } };
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      actualSurveyEndedAt: null,
      actualSurveyDate: revisitDate,
      type: SurveyVisitType.REVISIT,
      surveyResultStatus: SurveyResultStatus.DEFERRED,
      actualSurveyStatus: SurveyStatus.ON_GOING,
    });
    await Promise.all(
      failedAreas.map(async (areaFolder) => {
        await updateAreaFolderById({ id: areaFolder.id, revisit: true });
        await resetAreaRatings(areaFolder.id);
      })
    );
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return {
      success: {
        message: "Revisit scheduled successfully",
      },
    };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
