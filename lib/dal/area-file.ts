import { verifySession } from "../action/session";
import { AreaFile, AreaFileType, FileStatus } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createManyAreaFiles(
  data: {
    phaseOneAreaFolderId?: string;
    phaseTwoAreaFolderId?: string;
    type: AreaFileType;
    status: FileStatus;
  }[]
) {
  const session = await verifySession();
  if (!session) return null;
  const areaFiles = prisma.areaFile.createMany({
    data,
  });
  return areaFiles;
}

export async function getAreaFileById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const areaFile = await prisma.areaFile.findUnique({
    where: {
      id,
    },
    include: {
      fileVersions: {
        orderBy: {
          uploadedAt: "desc",
        },
      },
      phaseOneAreaFolder: {
        include: {
          area: true,
        },
      },
    },
  });
  return areaFile;
}

export async function updateAreaFileById(data: Partial<AreaFile>) {
  const session = await verifySession();
  if (!session) return null;
  const areaFile = await prisma.areaFile.update({
    where: {
      id: data.id,
    },
    data,
  });
  return areaFile;
}
