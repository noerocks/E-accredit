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
import {
  updateManyParameterFolderByAreaFolderId,
  updateParameterFolderById,
} from "../dal/parameter-folder";
import { updateAreaFolderById } from "../dal/area-folder";
import {
  getSurveyVisitById,
  getSurveyVisitStructureById,
  updateSurveyVisitById,
} from "../dal/survey-visit";
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

export async function migrateFiles(
  sourcePortfolio: string,
  destinationPortfolio: string
) {
  if (!sourcePortfolio || !destinationPortfolio)
    return { failure: { error: "Invalid input" } };
  try {
    const session = await verifySession();
    const user = session.user;
    const source = await getSurveyVisitStructureById(sourcePortfolio);
    const destination = await getSurveyVisitStructureById(destinationPortfolio);
    if (!source || !destination)
      return { failure: { error: "Error in fetching source and destination" } };
    await updateSurveyVisitById({
      id: destinationPortfolio,
      status: "IN_PROGRESS",
    });
    const sourceAreaFolders =
      source.phaseOneRequirements.instrumentFolder.areaFolders;
    const destinationAreaFolders =
      destination.phaseOneRequirements.instrumentFolder.areaFolders;
    const destinationEvidenceFiles = destinationAreaFolders?.flatMap(
      (areaFolder) =>
        areaFolder.parameterFolders.flatMap((parameter) =>
          parameter.indicatorFolders.flatMap((indicatorFolder) =>
            indicatorFolder.evidenceFiles.map((evidence) => evidence)
          )
        )
    );
    if (
      !sourceAreaFolders ||
      !destinationAreaFolders ||
      !destinationEvidenceFiles
    )
      return { failure: { error: "Error in fetching area folders" } };
    for (let i = 0; i < sourceAreaFolders.length; i++) {
      const areaFolder = sourceAreaFolders[i];
      const destinationAreaFolder = destinationAreaFolders.find(
        (area) => area.area.id === areaFolder.area.id
      );
      const area = areaFolder.area;
      const areaFiles = areaFolder.areaFiles.filter((file) => {
        if (destination.level.label === "PRELIMINARY_SURVEY_VISIT") {
          return file.type !== "COMPLIANCE_REPORT";
        }
        return true;
      });
      const sourceEvidenceFiles = areaFolder.parameterFolders.flatMap(
        (parameter) =>
          parameter.indicatorFolders.flatMap((indicatorFolder) =>
            indicatorFolder.evidenceFiles.map((evidence) => evidence)
          )
      );
      if (!areaFiles || !sourceEvidenceFiles || !destinationAreaFolder)
        return {
          failure: { error: "Error in fetching area files and evidence files" },
        };
      await updateAreaFolderById({
        id: destinationAreaFolder.id,
        status: "IN_PROGRESS",
      });
      await updateManyParameterFolderByAreaFolderId(destinationAreaFolder.id, {
        status: "IN_PROGRESS",
      });
      for (let j = 0; j < areaFiles.length; j++) {
        const areaFile = areaFiles[j];
        const activeVersion = areaFile.fileVersions.find(
          (file) => file.status === "ACTIVE"
        );
        if (!activeVersion)
          return {
            failure: { error: "Error in fetching active file version" },
          };
        const { name, objectUrl, type } = activeVersion;
        const destinationAreaFile = destinationAreaFolders
          .find((folder) => folder.area.id === area.id)
          ?.areaFiles.find((file) => file.type === areaFile.type);
        if (!destinationAreaFile)
          return {
            failure: { error: "Error in fetching destination area file" },
          };
        await resetAllAreaFileVersionStatus(destinationAreaFile.id);
        await createNewAreaFileVersion(
          name,
          user.email,
          destinationAreaFile.id,
          objectUrl,
          type
        );
        await updateAreaFileById({
          id: destinationAreaFile.id,
          status: "SUBMITTED",
        });
      }
      for (let k = 0; k < sourceEvidenceFiles.length; k++) {
        const evidenceFile = sourceEvidenceFiles[k];
        const indicator = evidenceFile.indicator;
        const activeVersion = evidenceFile.fileVersions.find(
          (file) => file.status === "ACTIVE"
        );
        if (!activeVersion)
          return {
            failure: { error: "Error in fetching active file version" },
          };
        const { name, objectUrl, type } = activeVersion;
        const destinationEvidenceFile = destinationEvidenceFiles.find(
          (evidence) => evidence.indicator.id === indicator.id
        );
        if (!destinationEvidenceFile)
          return {
            failure: { error: "Error in fetching destination evidence file" },
          };
        await resetAllEvidenceVersionStatus(destinationEvidenceFile.id);
        await createNewEvidenceFileVersion(
          name,
          user.email,
          destinationEvidenceFile.id,
          objectUrl,
          type
        );
        await updateEvidenceFileById({
          id: destinationEvidenceFile.id,
          status: "FOR_REVIEW",
        });
      }
    }
    revalidateTag("evidenceFiles");
    revalidateTag("parameterFolder");
    revalidateTag("areaFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Migration successfull" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
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
