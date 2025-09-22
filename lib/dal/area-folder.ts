import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createAreaFolder(
  instrumentFolderId: string,
  areaId: number,
  folderId: string
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
      folderId,
      area: {
        connect: {
          id: areaId,
        },
      },
    },
  });
  return areaFolder;
}
