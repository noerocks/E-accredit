"use server";

import { revalidateTag } from "next/cache";
import { updateEvidenceFileById } from "../dal/evidence-file";
import { FileStatus } from "../generated/prisma";
import { rejectActiveVersion } from "../dal/file-version";

export async function acceptOrReject(evidenceFileId: string, action: string) {
  if (!evidenceFileId || !action)
    return { failure: { error: "Invalid Input" } };
  let status;
  switch (action) {
    case "accept": {
      status = FileStatus.ACCEPTED;
      break;
    }
    case "reject": {
      status = FileStatus.REJECTED;
      break;
    }
  }
  const evidenceFile = await updateEvidenceFileById({
    id: evidenceFileId,
    status,
  });
  if (status === FileStatus.REJECTED) {
    await rejectActiveVersion(evidenceFileId);
  }
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("areaFolder");
  revalidateTag("surveyVisitStructure");
}
