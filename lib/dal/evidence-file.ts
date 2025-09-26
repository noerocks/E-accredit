import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createManyEvidenceFiles(
  evidenceFiles: {
    indicatorFolderId: string;
    indicatorId: number;
  }[]
) {
  const session = verifySession();
  if (!session) return null;
  const evidences = await prisma.evidenceFile.createMany({
    data: evidenceFiles,
  });
}
