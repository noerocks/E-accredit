"use server";

import { revalidateTag } from "next/cache";
import { EvidenceStatus, FileVersionStatus } from "../generated/prisma";
import { updateEvidenceFileById } from "./evidence-file";
import { verifySession } from "./session";
import {
  createNewEvidenceFileVersion,
  deleteVersionById as deleteVersionByIdDAL,
  resetAllEvidenceVersionStatus,
  updateVersionById,
} from "../dal/file-version";

export async function createNewVersion(
  name: string,
  evidenceFileId: string,
  objectUrl: string,
  fileType: string
) {
  const session = await verifySession();
  if (!session)
    return {
      failure: {
        message: "Not authenticated",
      },
    };
  await resetAllEvidenceVersionStatus();
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
  revalidateTag("evidenceFiles");
}

export async function changeActiveVersion(id: string) {
  if (!id) return { failure: { error: "Id is required" } };
  await resetAllEvidenceVersionStatus();
  const evidenceVersion = await updateVersionById(id, {
    status: FileVersionStatus.ACTIVE,
  });
  revalidateTag("evidenceFiles");
  return {
    success: { message: "Evidence version is successfuly set to active" },
  };
}

export async function deleteVersionById(id: string) {
  if (!id) return { failure: { error: "Id is required" } };
  const evidenceVersion = await deleteVersionByIdDAL(id);
  revalidateTag("evidenceFiles");
  return { success: { message: "Evidence version is deleted" } };
}
