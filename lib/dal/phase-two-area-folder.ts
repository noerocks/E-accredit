import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createPhaseTwoAreaFolder(
  phaseTwoFolderId: string,
  areaId: number
) {
  const session = await verifySession();
  if (!session) return null;
  const areaFolder = await prisma.phaseTwoAreaFolder.create({
    data: {
      phaseTwoFolder: {
        connect: {
          id: phaseTwoFolderId,
        },
      },
      area: {
        connect: {
          id: areaId,
        },
      },
    },
  });
  return areaFolder;
}
