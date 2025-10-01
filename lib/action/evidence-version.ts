"use server";

import { revalidateTag } from "next/cache";
import {
  createNewEvidenceVersion,
  resetAllStatus,
} from "../dal/evidence-version";
import { EvidenceStatus } from "../generated/prisma";
import { updateEvidenceFileById } from "./evidence-file";
import { verifySession } from "./session";

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
  await resetAllStatus();
  const evidenceFileVersion = await createNewEvidenceVersion(
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
