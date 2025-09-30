"use server";

import { updateEvidenceById as updateEvidenceByIdDAL } from "../dal/evidence";
import { EvidenceFile } from "../generated/prisma";

export async function updateEvidenceById(
  evidenceId: string,
  data: Partial<Omit<EvidenceFile, "id">>
) {
  const evidence = await updateEvidenceByIdDAL(evidenceId, data);
}
