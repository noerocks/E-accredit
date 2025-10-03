"use server";

import { revalidateTag } from "next/cache";
import { EvidenceStatus, FileVersionStatus } from "../generated/prisma";
import { updateEvidenceFileById } from "./evidence-file";
import { verifySession } from "./session";
import {
  createNewAreaFileVersion,
  createNewEvidenceFileVersion,
  deleteVersionById as deleteVersionByIdDAL,
  resetAllAreaFileVersionStatus,
  resetAllEvidenceVersionStatus,
  updateVersionById,
} from "../dal/file-version";

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
      status: EvidenceStatus.FOR_REVIEW,
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
  }
  revalidateTag("evidenceFiles");
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
  revalidateTag("evidenceFiles");
  return {
    success: { message: "File version is successfuly set to active" },
  };
}

export async function deleteVersionById(id: string) {
  if (!id) return { failure: { error: "Id is required" } };
  const evidenceVersion = await deleteVersionByIdDAL(id);
  revalidateTag("evidenceFiles");
  return { success: { message: "File version is deleted" } };
}
