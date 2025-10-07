import { verifySession } from "../action/session";
import {
  FileStatus,
  FileVersion,
  FileVersionStatus,
} from "../generated/prisma";
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

export async function createNewAreaFileVersion(
  name: string,
  areaFileId: string,
  objectUrl: string,
  type: string
) {
  const session = await verifySession();
  if (!session) return null;
  const areaFileVersion = await prisma.fileVersion.create({
    data: {
      name,
      status: FileVersionStatus.ACTIVE,
      areaFile: {
        connect: {
          id: areaFileId,
        },
      },
      objectUrl,
      type,
    },
  });
  return areaFileVersion;
}

export async function resetAllEvidenceVersionStatus(fileId: string) {
  const session = await verifySession();
  if (!session) return null;
  await prisma.fileVersion.updateMany({
    where: {
      evidenceFileId: fileId,
      NOT: {
        status: FileVersionStatus.REJECTED,
      },
    },
    data: {
      status: FileVersionStatus.ARCHIVED,
    },
  });
}

export async function resetAllAreaFileVersionStatus(fileId: string) {
  const session = await verifySession();
  if (!session) return null;
  await prisma.fileVersion.updateMany({
    where: {
      areaFileId: fileId,
    },
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

export async function rejectActiveVersion(evidenceFileId: string) {
  const session = await verifySession();
  if (!session) return null;
  const evidenceVersion = await prisma.fileVersion.updateMany({
    where: {
      status: FileVersionStatus.ACTIVE,
      evidenceFileId: evidenceFileId,
    },
    data: {
      status: FileVersionStatus.REJECTED,
    },
  });
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
