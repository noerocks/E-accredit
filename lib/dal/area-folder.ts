import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { AreaFolder, Progress } from "../generated/prisma";
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

export const getAreaFolderById = unstable_cache(
  async (id: string) => {
    const areaFolder = await prisma.areaFolder.findUnique({
      where: {
        id,
      },
      include: {
        area: true,
        recommendations: true,
        areaFiles: {
          include: {
            fileVersions: true,
          },
        },
        parameterFolders: {
          include: {
            parameter: true,
            indicatorFolders: {
              include: {
                evidenceFiles: {
                  include: {
                    fileVersions: true,
                    ratings: true,
                  },
                },
              },
            },
          },
        },
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
        instrumentFolder: {
          include: {
            phaseOneRequirements: {
              include: {
                surveyVisit: {
                  include: {
                    accreditation: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return areaFolder;
  },
  ["getAreaFolderById"],
  {
    tags: ["areaFolder"],
  }
);

export async function updateAreaFolderById(data: Partial<AreaFolder>) {
  const session = await verifySession();
  if (!session) return null;
  const areaFolder = await prisma.areaFolder.update({
    where: {
      id: data.id,
    },
    data,
  });
  return areaFolder;
}
