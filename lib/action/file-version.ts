"use server";

import { revalidateTag } from "next/cache";
import { FileStatus, FileVersionStatus } from "../generated/prisma";
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

type FileVersionType = {
  name: string;
  objectUrl: string;
  fileType: string;
  evidenceFileId?: string;
  areaFileId?: string;
};

export async function createNewVersion({
  name,
  objectUrl,
  fileType,
  evidenceFileId,
  areaFileId,
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
      evidenceFileId,
      objectUrl,
      fileType
    );
    const evidenceFile = await updateEvidenceFileById({
      id: evidenceFileId,
      status: FileStatus.FOR_REVIEW,
    });
  }
  if (areaFileId) {
    await resetAllAreaFileVersionStatus(areaFileId);
    const areaFileVersion = await createNewAreaFileVersion(
      name,
      areaFileId,
      objectUrl,
      fileType
    );
    const areaFile = await updateAreaFileById({
      id: areaFileId,
      status: FileStatus.SUBMITTED,
    });
  }
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
}

export async function changeActiveVersion(
  id: string,
  fileId: string,
  fileType: "Evidence" | "AreaFile"
) {
  if (!id) return { failure: { error: "Id is required" } };
  switch (fileType) {
    case "Evidence": {
      await resetAllEvidenceVersionStatus(fileId);
      const evidenceVersion = await updateVersionById(id, {
        status: FileVersionStatus.ACTIVE,
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
  const evidenceFile = await updateEvidenceFileById({
    id: fileId,
    status: FileStatus.FOR_REVIEW,
  });
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  return {
    success: { message: "File version is successfuly set to active" },
  };
}

export async function deleteVersionById(id: string) {
  if (!id) return { failure: { error: "Id is required" } };
  const evidenceVersion = await deleteVersionByIdDAL(id);
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  return { success: { message: "File version is deleted" } };
}
