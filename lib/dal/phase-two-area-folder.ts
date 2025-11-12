import { unstable_cache } from "next/cache";
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

export const getAllPhaseTwoAreaFolders = unstable_cache(
  async () => {
    const phaseTwoAreaFolders = await prisma.phaseTwoAreaFolder.findMany({
      include: {
        area: true,
        taskForce: {
          include: {
            chairPerson: {
              include: {
                user: true,
              },
            },
            taskForceMember: {
              include: {
                programPersonnel: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return phaseTwoAreaFolders;
  },
  ["getAllPhaseTwoAreaFolders"],
  {
    tags: ["areaFolder"],
  }
);
