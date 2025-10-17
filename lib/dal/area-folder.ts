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
        strengths: true,
        weaknesses: true,
        areaFiles: {
          include: {
            fileVersions: true,
          },
        },
        parameterFolders: {
          include: {
            areaFolder: {
              include: {
                area: true,
                taskForce: {
                  include: {
                    chairPerson: true,
                  },
                },
              },
            },
            parameter: true,
            indicatorFolders: {
              include: {
                evidenceFiles: {
                  include: {
                    indicator: true,
                    fileVersions: true,
                    ratings: {
                      include: {
                        accreditor: true,
                      },
                    },
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
    if (areaFolder) {
      return {
        ...areaFolder,
        parameterFolders: areaFolder.parameterFolders.map((parameter) => ({
          ...parameter,
          indicatorFolders: parameter.indicatorFolders.map((indicator) => ({
            ...indicator,
            evidenceFiles: indicator.evidenceFiles.map((evidence) => ({
              ...evidence,
              ratings: evidence.ratings.map((rating) => ({
                ...rating,
                finalRate:
                  rating.finalRate !== null
                    ? Number(rating.finalRate)
                    : rating.finalRate,
              })),
            })),
          })),
        })),
      };
    }
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
