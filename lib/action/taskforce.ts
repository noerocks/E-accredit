"use server";

import { revalidateTag } from "next/cache";
import { assignChairperson as assignChairpersonDAL } from "../dal/taskforce";
import { deleteMember } from "./member";

export async function assignChairperson({
  personnelId,
  areaFolderId = null,
  phaseTwoAreaFolderId = null,
  memberId,
}: {
  personnelId: string;
  areaFolderId?: string | null;
  phaseTwoAreaFolderId?: string | null;
  memberId: string | undefined;
}) {
  if (!personnelId || (!areaFolderId && !phaseTwoAreaFolderId))
    return { failure: { error: "Invalid input" } };
  if (memberId) {
    await deleteMember(memberId);
  }
  const taskforce = await assignChairpersonDAL({
    personnelId,
    areaFolderId,
    phaseTwoAreaFolderId,
  });
  revalidateTag("accreditations");
  revalidateTag("areaFolder");
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("surveyVisitStructure");
}
