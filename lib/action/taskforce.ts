"use server";

import { assignChairperson as assignChairpersonDAL } from "../dal/taskforce";

export async function assignChairperson(
  personnelId: string,
  areaFolderId: string | undefined
) {
  if (!personnelId || !areaFolderId)
    return { failure: { error: "Invalid input" } };
  const taskforce = await assignChairpersonDAL(personnelId, areaFolderId);
}
