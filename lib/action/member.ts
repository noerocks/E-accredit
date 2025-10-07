"use server";

import { revalidateTag } from "next/cache";
import { createMember, deleteMember as deleteMemberDAL } from "../dal/member";

export async function assignMember(
  personnelId: string,
  taskforceId: string | undefined
) {
  if (!personnelId || !taskforceId)
    return { failure: { error: "Invalid input" } };
  const member = await createMember(personnelId, taskforceId);
  revalidateTag("areaFolder");
  revalidateTag("evidenceFiles");
}

export async function deleteMember(memberId: string | undefined) {
  if (!memberId) return { failure: { error: "Invalid input" } };
  const member = await deleteMemberDAL(memberId);
  revalidateTag("areaFolder");
  revalidateTag("evidenceFiles");
}
