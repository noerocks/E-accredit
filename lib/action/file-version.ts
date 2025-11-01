"use server";

import { revalidateTag } from "next/cache";
import {
  AreaFileType,
  AuditAction,
  AuditEntity,
  FileStatus,
  FileVersionStatus,
  Level,
  Progress,
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
import { getAreaFileById, updateAreaFileById } from "../dal/area-file";
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
import { grantAccreditedStatus } from "./accreditation";
import { createActivity } from "../dal/audit";
import { formatAccreditationName, screamingSnakeToTitle } from "../utils";
import { getEvidenceFileById } from "../dal/evidence";

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

const areaFileType = {
  [AreaFileType.PPP]: "Program Performance Profile",
  [AreaFileType.COMPLIANCE_REPORT]: "Compliance Report",
  [AreaFileType.NARRATIVE_PROFILE]: "Narrative Profile",
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
  const user = session.user;
  if (!session)
    return {
      failure: {
        message: "Not authenticated",
      },
    };
  if (evidenceFileId) {
    const evidence = await getEvidenceFileById(evidenceFileId);
    await resetAllEvidenceVersionStatus(evidenceFileId);
    const evidenceFileVersion = await createNewEvidenceFileVersion(
      name,
      uploaderEmail,
      evidenceFileId,
      objectUrl,
      fileType
    );
    await createActivity({
      actorId: user.id,
      action: AuditAction.FILE_UPLOAD,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: surveyVisitId,
      description: `Uploaded an evidence file to ${evidence.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${evidence.indicatorFolder?.parameterFolder.parameter.label} > ${evidence.indicator?.label}`,
    });
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
    const file = await getAreaFileById(areaFileId);
    await resetAllAreaFileVersionStatus(areaFileId);
    const areaFileVersion = await createNewAreaFileVersion(
      name,
      uploaderEmail,
      areaFileId,
      objectUrl,
      fileType
    );
    if (file?.phaseOneAreaFolder) {
      await createActivity({
        actorId: user.id,
        action: AuditAction.FILE_UPLOAD,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Uploaded a ${areaFileType[file.type]} to ${
          file?.phaseOneAreaFolder?.area.label
        }`,
      });
    } else if (file?.phaseTwoAreaFolder) {
      await createActivity({
        actorId: user.id,
        action: AuditAction.FILE_UPLOAD,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Uploaded a ${areaFileType[file.type]} to criteria: ${
          file?.phaseTwoAreaFolder?.area.description
        }`,
      });
    }
    const areaFile = await updateAreaFileById({
      id: areaFileId,
      status: FileStatus.SUBMITTED,
    });
    const surveyVisit = await updateSurveyVisitById({
      id: surveyVisitId,
      status: Progress.IN_PROGRESS,
    });
  } else {
    const surveyVisit = await getSurveyVisitStructureById(surveyVisitId!);
    const certificate = await createSurveyCertificate(
      name,
      uploaderEmail,
      surveyVisitId!,
      objectUrl,
      fileType
    );
    const accreditation = await grantAccreditedStatus(
      accreditationId,
      surveyVisitId,
      level
    );
    await createActivity({
      actorId: user.id,
      action: AuditAction.FILE_UPLOAD,
      entity: AuditEntity.SURVEY,
      portfolioId: surveyVisitId,
      description: `Uploaded an accreditation certificate to ${surveyVisit?.accreditation.program.code}`,
    });
  }
  revalidateTag("activities");
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
    await createActivity({
      actorId: user.id,
      action: AuditAction.FILE_UPLOAD,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: sourcePortfolio,
      description: `Migrated all files from ${formatAccreditationName(
        source?.accreditation.program.code!,
        source?.level!
      )} to ${formatAccreditationName(
        destination?.accreditation.program.code!,
        destination?.level!
      )}`,
    });
    await createActivity({
      actorId: user.id,
      action: AuditAction.FILE_UPLOAD,
      entity: AuditEntity.PORTFOLIO,
      portfolioId: sourcePortfolio,
      description: `Migrated all files from ${formatAccreditationName(
        source?.accreditation.program.code!,
        source?.level!
      )} to ${formatAccreditationName(
        destination?.accreditation.program.code!,
        destination?.level!
      )}`,
    });
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
    revalidateTag("activities");
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
  const { user } = await verifySession();
  if (!id || !fileId || !fileType)
    return { failure: { error: "Invalid input" } };
  const surveyVisit = await getSurveyVisitById(surveyVisitId!);
  if (!surveyVisit?.allowEdits)
    return { failure: { error: "This action is currently disabled" } };
  switch (fileType) {
    case "Evidence": {
      const file = await getEvidenceFileById(fileId);
      await resetAllEvidenceVersionStatus(fileId);
      const evidenceVersion = await updateVersionById(id, {
        status: FileVersionStatus.ACTIVE,
      });
      await createActivity({
        actorId: user.id,
        action: AuditAction.FILE_EDIT,
        entity: AuditEntity.PORTFOLIO,
        portfolioId: surveyVisitId,
        description: `Changed an active version in ${file.indicatorFolder?.parameterFolder.areaFolder.area.label} > ${file.indicatorFolder?.parameterFolder.parameter.label} > ${file.indicator?.label}`,
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
      const areaFile = await getAreaFileById(fileId);
      if (areaFile?.phaseOneAreaFolder) {
        await createActivity({
          actorId: user.id,
          action: AuditAction.FILE_EDIT,
          entity: AuditEntity.PORTFOLIO,
          portfolioId: surveyVisitId,
          description: `Changed an active version of ${
            areaFileType[areaFile?.type]
          } in criteria: ${areaFile.phaseOneAreaFolder.area.description}`,
        });
      } else if (areaFile?.phaseTwoAreaFolder) {
        await createActivity({
          actorId: user.id,
          action: AuditAction.FILE_EDIT,
          entity: AuditEntity.PORTFOLIO,
          portfolioId: surveyVisitId,
          description: `Changed an active version of ${
            areaFileType[areaFile?.type]
          } in criteria: ${areaFile.phaseTwoAreaFolder.area.description}`,
        });
      }
      await resetAllAreaFileVersionStatus(fileId);
      const areaFileVersion = await updateVersionById(id, {
        status: FileVersionStatus.ACTIVE,
      });
      break;
    }
  }
  revalidateTag("activities");
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
  revalidateTag("activities");
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("areaFolder");
  revalidateTag("surveyVisitStructure");
  return { success: { message: "File version is deleted" } };
}
