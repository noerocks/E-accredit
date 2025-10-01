import { verifySession } from "../action/session";
import { FileVersionStatus } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createNewEvidenceVersion(
  name: string,
  evidenceFileId: string,
  objectUrl: string,
  type: string
) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceVersion = await prisma.evidenceVersions.create({
    data: {
      name,
      status: FileVersionStatus.ACTIVE,
      evidenceFile: {
        connect: {
          id: evidenceFileId,
        },
      },
      objectUrl,
      type,
    },
  });
  return evidenceVersion;
}

export async function resetAllStatus() {
  const session = await verifySession();
  if (!session) return null;
  await prisma.evidenceVersions.updateMany({
    data: {
      status: FileVersionStatus.ARCHIVED,
    },
  });
}
