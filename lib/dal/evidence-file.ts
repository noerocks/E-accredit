import { EvidenceFile } from "../generated/prisma";
import { prisma } from "../prisma";
import { verifySession } from "../action/session";

export async function updateEvidenceFileById(data: Partial<EvidenceFile>) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceFile = await prisma.evidenceFile.update({
    where: {
      id: data.id,
    },
    data,
  });
  return evidenceFile;
}
