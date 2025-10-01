import { verifySession } from "../action/session";
import { EvidenceStatus } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createManyEvidenceFiles(
  evidenceFiles: {
    indicatorFolderId: string;
    indicatorId: number;
    status: EvidenceStatus;
  }[]
) {
  const session = await verifySession();
  if (!session) return null;
  const evidences = await prisma.evidenceFile.createMany({
    data: evidenceFiles,
  });
  return evidences;
}

export async function getEvidenceFileById(id: string) {
  const evidence = await prisma.evidenceFile.findUnique({
    where: {
      id,
    },
    include: {
      indicator: true,
      evidenceVersions: {
        include: {
          evidenceFile: true,
        },
        orderBy: {
          uploadedAt: "desc",
        },
      },
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
