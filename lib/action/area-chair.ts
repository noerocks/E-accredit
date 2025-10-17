"use server";

import { revalidateTag } from "next/cache";
import { createNewAreaChair, deleteAreaChairById } from "../dal/area-chair";

export async function assignAreaChair(
  userId: string | undefined,
  surveyTeamId: string | undefined,
  areaFolderId: string | undefined,
  areaChairId: string | undefined
) {
  if (!userId || !surveyTeamId || !areaFolderId)
    return { failure: { error: "Invalid input" } };
  try {
    if (areaChairId) {
      const deletedAreaChair = await deleteAreaChairById(areaChairId);
    }
    const areaChair = await createNewAreaChair(
      userId,
      surveyTeamId,
      areaFolderId
    );
    revalidateTag("evidenceFiles");
    revalidateTag("areaFolder");
    revalidateTag("parameterFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Area chair assigned successfully" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
