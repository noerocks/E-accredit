import { verifySession } from "../action/session";
import { EvidenceVersions, FileVersionStatus } from "../generated/prisma";
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

export async function updateVersionById(
  id: string,
  data: Partial<EvidenceVersions>
) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceVersion = await prisma.evidenceVersions.update({
    where: {
      id,
    },
    data,
  });
  return evidenceVersion;
}

export async function deleteVersionById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceVersion = await prisma.evidenceVersions.delete({
    where: {
      id,
    },
  });
  return evidenceVersion;
}
