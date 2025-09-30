import { verifySession } from "../action/session";
import { EvidenceFile } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createManyEvidenceFiles(
  evidenceFiles: {
    indicatorFolderId: string;
    indicatorId: number;
  }[]
) {
  const session = await verifySession();
  if (!session) return null;
  const evidences = await prisma.evidenceFile.createMany({
    data: evidenceFiles,
  });
}

export async function getEvidenceFileById(id: string) {
  const evidence = await prisma.evidenceFile.findUnique({
    where: {
      id,
    },
    include: {
      indicator: true,
      indicatorFolder: {
        include: {
          parameterFolder: {
            include: {
              parameter: true,
            },
          },
        },
      },
    },
  });
  return evidence;
}

export async function updateEvidenceById(
  id: string,
  data: Partial<Omit<EvidenceFile, "id">>
) {
  const session = await verifySession();
  if (!session) return null;
  const evidence = await prisma.evidenceFile.update({
    where: {
      id,
    },
    data,
  });
  return evidence;
}
