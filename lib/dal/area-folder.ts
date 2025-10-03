import { verifySession } from "../action/session";
import { Progress } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createAreaFolder(
  instrumentFolderId: string,
  areaId: number,
  status: Progress
) {
  const session = await verifySession();
  if (!session) return null;
  const areaFolder = await prisma.areaFolder.create({
    data: {
      instrumentFolder: {
        connect: {
          id: instrumentFolderId,
        },
      },
      area: {
        connect: {
          id: areaId,
        },
      },
      status,
    },
  });
  return areaFolder;
}

export async function getAreaFolderById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const areaFolder = await prisma.areaFolder.findUnique({
    where: {
      id,
    },
    include: {
      area: true,
    },
  });
  return areaFolder;
}
