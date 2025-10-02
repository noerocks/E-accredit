import { verifySession } from "../action/session";
import { FileVersion, FileVersionStatus } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createNewEvidenceFileVersion(
  name: string,
  evidenceFileId: string,
  objectUrl: string,
  type: string
) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceVersion = await prisma.fileVersion.create({
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

export async function resetAllEvidenceVersionStatus() {
  const session = await verifySession();
  if (!session) return null;
  await prisma.fileVersion.updateMany({
    data: {
      status: FileVersionStatus.ARCHIVED,
    },
  });
}

export async function updateVersionById(
  id: string,
  data: Partial<FileVersion>
) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceVersion = await prisma.fileVersion.update({
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
  const evidenceVersion = await prisma.fileVersion.delete({
    where: {
      id,
    },
  });
  return evidenceVersion;
}
