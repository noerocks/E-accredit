"use server";

import { revalidateTag } from "next/cache";
import { assignChairperson as assignChairpersonDAL } from "../dal/taskforce";
import { deleteMember } from "./member";

export async function assignChairperson(
  personnelId: string,
  areaFolderId: string | undefined,
  memberId: string | undefined
) {
  if (!personnelId || !areaFolderId)
    return { failure: { error: "Invalid input" } };
  if (memberId) {
    await deleteMember(memberId);
  }
  const taskforce = await assignChairpersonDAL(personnelId, areaFolderId);
  revalidateTag("areaFolder");
  revalidateTag("evidenceFiles");
  revalidateTag("parameterFolder");
  revalidateTag("surveyVisitStructure");
}
