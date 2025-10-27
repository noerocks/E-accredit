"use server";

import { revalidateTag } from "next/cache";
import {
  FileStatus,
  FileVersionStatus,
  Level,
  Progress,
  SurveyResultStatus,
} from "../generated/prisma";
import { updateEvidenceFileById } from "../dal/evidence-file";
import { verifySession } from "./session";
import {
  createNewAreaFileVersion,
  createNewEvidenceFileVersion,
  createSurveyCertificate,
  deleteVersionById as deleteVersionByIdDAL,
  resetAllAreaFileVersionStatus,
  resetAllEvidenceVersionStatus,
  updateVersionById,
} from "../dal/file-version";
import { updateAreaFileById } from "../dal/area-file";
import { updateParameterFolderById } from "../dal/parameter-folder";
import { updateAreaFolderById } from "../dal/area-folder";
import { getSurveyVisitById, updateSurveyVisitById } from "../dal/survey-visit";
import { updateAccreditationById } from "../dal/accreditation";
import { grantAccreditedStatus } from "./accreditation";

type FileVersionType = {
  name: string;
  uploaderEmail: string;
  objectUrl: string;
  fileType: string;
  evidenceFileId?: string | undefined;
  areaFileId?: string | undefined;
  parameterFolderId?: string | undefined;
  areaFolderId?: string | undefined;
  surveyVisitId: string | undefined;
  accreditationId?: string | undefined;
  level?: Level | undefined;
};

export async function createNewVersion({
  name,
  uploaderEmail,
  objectUrl,
  fileType,
  evidenceFileId,
  areaFileId,
  parameterFolderId,
  areaFolderId,
  surveyVisitId,
  accreditationId,
  level,
}: FileVersionType) {
  const session = await verifySession();
  if (!session)
    return {
      failure: {
        message: "Not authenticated",
      },
    };
  if (evidenceFileId) {
    await resetAllEvidenceVersionStatus(evidenceFileId);
    const evidenceFileVersion = await createNewEvidenceFileVersion(
      name,
      uploaderEmail,
      evidenceFileId,
      objectUrl,
      fileType
    );
    const evidenceFile = await updateEvidenceFileById({
      id: evidenceFileId,
      status: FileStatus.FOR_REVIEW,
    });
    const parameterFolder = await updateParameterFolderById({
      id: parameterFolderId,
      status: Progress.IN_PROGRESS,
    });
    const areaFolder = await updateAreaFolderById({
      id: areaFolderId,
      status: Progress.IN_PROGRESS,
    });
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      status: Progress.IN_PROGRESS,
    });
  } else if (areaFileId) {
    await resetAllAreaFileVersionStatus(areaFileId);
    const areaFileVersion = await createNewAreaFileVersion(
      name,
      uploaderEmail,
      areaFileId,
      objectUrl,
      fileType
    );
    const areaFile = await updateAreaFileById({
      id: areaFileId,
      status: FileStatus.SUBMITTED,
    });
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      status: Progress.IN_PROGRESS,
    });
  } else {
    const certificate = await createSurveyCertificate(
      name,
      uploaderEmail,
      surveyVisitId!,
      objectUrl,
      fileType
    );
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      surveyResultStatus: SurveyResultStatus.GRANTED,
      openForActualSurvey: false,
    });
    const accreditation = await grantAccreditedStatus(accreditationId, level);
  }
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("areaFolder");
  revalidateTag("surveyVisitStructure");
}

export async function changeActiveVersion(
  id: string | undefined,
  fileId: string | undefined,
  fileType: "Evidence" | "AreaFile",
  parameterFolderId: string | undefined,
  areaFolderId: string | undefined,
  surveyVisitId: string | undefined
) {
  if (!id || !fileId || !fileType)
    return { failure: { error: "Invalid input" } };
  const surveyVisit = await getSurveyVisitById(surveyVisitId!);
  if (!surveyVisit?.allowEdits)
    return { failure: { error: "This action is currently disabled" } };
  switch (fileType) {
    case "Evidence": {
      await resetAllEvidenceVersionStatus(fileId);
      const evidenceVersion = await updateVersionById(id, {
        status: FileVersionStatus.ACTIVE,
      });
      const evidenceFile = await updateEvidenceFileById({
        id: fileId,
        status: FileStatus.FOR_REVIEW,
      });
      const parameterFolder = await updateParameterFolderById({
        id: parameterFolderId!,
        status: Progress.IN_PROGRESS,
      });
      const areaFolder = await updateAreaFolderById({
        id: areaFolderId,
        status: Progress.IN_PROGRESS,
      });
      const surveyVisit = await updateSurveyVisitById({
        id: surveyVisitId,
        status: Progress.IN_PROGRESS,
      });
      break;
    }
    case "AreaFile": {
      await resetAllAreaFileVersionStatus(fileId);
      const areaFileVersion = await updateVersionById(id, {
        status: FileVersionStatus.ACTIVE,
      });
      break;
    }
  }
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("areaFolder");
  revalidateTag("surveyVisitStructure");
  return {
    success: { message: "File version is successfuly set to active" },
  };
}

export async function deleteVersionById(
  id: string,
  surveyVisitId: string | undefined
) {
  if (!id) return { failure: { error: "Id is required" } };
  const surveyVisit = await getSurveyVisitById(surveyVisitId!);
  if (!surveyVisit?.allowEdits)
    return { failure: { error: "This action is currently disabled" } };
  const evidenceVersion = await deleteVersionByIdDAL(id);
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("areaFolder");
  revalidateTag("surveyVisitStructure");
  return { success: { message: "File version is deleted" } };
}
