"use server";

import { revalidateTag } from "next/cache";
import {
  AuditAction,
  AuditEntity,
  Level,
  Progress,
  SurveyResultStatus,
  SurveyStatus,
  SurveyVisitType,
} from "../generated/prisma";
import { updateSurveyVisitById } from "../dal/survey-visit";
import { AreaFolderDTO } from "../dto/accreditation-instrument";
import { resetAreaRatings } from "../dal/rating";
import { updateAreaFolderById } from "../dal/area-folder";
import { grantAccreditedStatus } from "./accreditation";
import { createActivity } from "../dal/audit";
import { verifySession } from "./session";
import { formatAccreditationName } from "../utils";

export async function markAsComplete(surveyVisitId: string) {
  try {
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      status: Progress.COMPLETE,
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.PORTFOLIO_REVIEW,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: surveyVisitId,
      description: `Marked as done: ${formatAccreditationName(
        surveyVisit?.accreditation.program.code!,
        surveyVisit?.level!
      )}`,
    });
    revalidateTag("activities");
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
    const { user } = await verifySession();
    if (!allowFileUploads) {
      await createActivity({
        actorId: user.id,
        action: AuditAction.PORTFOLIO_REVIEW,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Enabled file uploads for this portfolio`,
      });
    } else {
      await createActivity({
        actorId: user.id,
        action: AuditAction.PORTFOLIO_REVIEW,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Disabled file uploads for this portfolio`,
      });
    }
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      allowFileUploads: !allowFileUploads,
    });
    revalidateTag("activities");
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
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      allowEdits: !allowEdits,
    });
    if (!allowEdits) {
      await createActivity({
        actorId: user.id,
        action: AuditAction.PORTFOLIO_REVIEW,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Enabled file updates for this portfolio`,
      });
    } else {
      await createActivity({
        actorId: user.id,
        action: AuditAction.PORTFOLIO_REVIEW,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Disabled file updates for this portfolio`,
      });
    }
    revalidateTag("activities");
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
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      openForSelfSurvey: !openForSelfSurvey,
      allowFileUploads: false,
      allowEdits: false,
      selfSurveyStatus: SurveyStatus.ON_GOING,
      selfSurveyStartedAt: new Date(),
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.SURVEY_START,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: surveyVisitId,
      description: `Opened for self survey: ${formatAccreditationName(
        surveyVisit?.accreditation.program.code!,
        surveyVisit?.level!
      )}`,
    });
    revalidateTag("accreditations");
    revalidateTag("activities");
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
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      openForActualSurvey: !openForActualSurvey,
      allowFileUploads: false,
      allowEdits: false,
      actualSurveyStatus: SurveyStatus.ON_GOING,
      actualSurveyStartedAt: new Date(),
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.SURVEY_START,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: surveyVisitId,
      description: `Opened for actual survey: ${formatAccreditationName(
        surveyVisit?.accreditation.program.code!,
        surveyVisit?.level!
      )}`,
    });
    revalidateTag("accreditations");
    revalidateTag("activities");
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
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      selfSurveyStatus: SurveyStatus.COMPLETE,
      openForSelfSurvey: false,
      selfSurveyEndedAt: new Date(),
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.SURVEY_END,
      entity: AuditEntity.SELF_SURVEY,
      portfolioId: surveyVisitId,
      description: `Closed self-survey: ${formatAccreditationName(
        surveyVisit?.accreditation.program.code!,
        surveyVisit?.level!
      )}`,
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.FILE_UPLOAD,
      entity: AuditEntity.SELF_SURVEY,
      portfolioId: surveyVisitId,
      description: `Generated Self Survey Report PDF`,
    });
    revalidateTag("accreditations");
    revalidateTag("activities");
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
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      actualSurveyStatus: SurveyStatus.COMPLETE,
      actualSurveyEndedAt: new Date(),
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.SURVEY_END,
      entity: AuditEntity.ACTUAL_SURVEY,
      portfolioId: surveyVisitId,
      description: `Closed actual-survey: ${formatAccreditationName(
        surveyVisit?.accreditation.program.code!,
        surveyVisit?.level!
      )}`,
    });
    revalidateTag("accreditations");
    revalidateTag("activities");
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
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      actualSurveyEndedAt: null,
      actualSurveyDate: revisitDate,
      type: SurveyVisitType.REVISIT,
      surveyResultStatus: SurveyResultStatus.DEFERRED,
      actualSurveyStatus: SurveyStatus.PENDING,
      openForActualSurvey: false,
      allowEdits: true,
      allowFileUploads: true,
    });
    await Promise.all(
      failedAreas.map(async (areaFolder) => {
        await updateAreaFolderById({ id: areaFolder.id, revisit: true });
        await resetAreaRatings(areaFolder.id);
      })
    );
    await createActivity({
      actorId: user.id,
      action: AuditAction.SURVEY_END,
      entity: AuditEntity.ACTUAL_SURVEY,
      portfolioId: surveyVisitId,
      description: `Scheduled for revisit: ${formatAccreditationName(
        surveyVisit?.accreditation.program.code!,
        surveyVisit?.level!
      )}`,
    });
    revalidateTag("accreditations");
    revalidateTag("activities");
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

export async function grantPhaseOne(
  surveyVisitId: string,
  accreditationId: string | undefined,
  level: Level | undefined
) {
  if (!surveyVisitId) return { failure: { error: "Invalid input" } };
  try {
    const { user } = await verifySession();
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      surveyResultStatus: SurveyResultStatus.GRANTED,
      actualSurveyEndedAt: new Date(),
      openForActualSurvey: false,
    });
    const accreditation = await grantAccreditedStatus(
      accreditationId,
      surveyVisitId,
      level
    );
    await createActivity({
      actorId: user.id,
      action: AuditAction.SURVEY_END,
      entity: AuditEntity.ACTUAL_SURVEY,
      portfolioId: surveyVisitId,
      description: `Passed phase one. Qualified for phase two.`,
    });
    revalidateTag("activities");
    revalidateTag("accreditations");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return { success: { message: "Phase one results has been confirmed" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}

export async function denyPhaseTwo(
  surveyVisitId: string,
  accreditationId: string | undefined,
  level: Level | undefined
) {
  if (!surveyVisitId || !accreditationId || !level)
    return { failure: { error: "Invalid input" } };
  try {
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      surveyResultStatus: SurveyResultStatus.NOT_GRANTED,
      openForActualSurvey: false,
      actualSurveyStatus: SurveyStatus.COMPLETE,
      actualSurveyEndedAt: new Date(),
    });
    revalidateTag("accreditations");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("evidenceFiles");
    revalidateTag("surveyVisitStructure");
    revalidateTag("surveyVisitSurvey");
    return { success: { message: "Status has been denied" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
