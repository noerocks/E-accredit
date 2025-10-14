"use server";

import { revalidateTag } from "next/cache";
import { FileStatus, FileVersionStatus, Progress } from "../generated/prisma";
import { updateEvidenceFileById } from "../dal/evidence-file";
import { verifySession } from "./session";
import {
  createNewAreaFileVersion,
  createNewEvidenceFileVersion,
  deleteVersionById as deleteVersionByIdDAL,
  resetAllAreaFileVersionStatus,
  resetAllEvidenceVersionStatus,
  updateVersionById,
} from "../dal/file-version";
import { updateAreaFileById } from "../dal/area-file";
import { updateParameterFolderById } from "../dal/parameter-folder";
import { updateAreaFolderById } from "../dal/area-folder";
import { updateSurveyVisitById } from "../dal/survey-visit";

type FileVersionType = {
  name: string;
  uploaderEmail: string;
  objectUrl: string;
  fileType: string;
  evidenceFileId?: string;
  areaFileId?: string;
  parameterFolderId: string | undefined;
  areaFolderId: string | undefined;
  surveyVisitId: string | undefined;
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
  }
  if (areaFileId) {
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

export async function deleteVersionById(id: string) {
  if (!id) return { failure: { error: "Id is required" } };
  const evidenceVersion = await deleteVersionByIdDAL(id);
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("areaFolder");
  revalidateTag("surveyVisitStructure");
  return { success: { message: "File version is deleted" } };
}
