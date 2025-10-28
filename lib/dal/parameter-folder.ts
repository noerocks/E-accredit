import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { ParameterFolder, Progress } from "../generated/prisma";

export async function createParameterFolder(
  areaFolderId: string,
  parameterId: number
) {
  const session = await verifySession();
  if (!session) return null;
  const parameterFolder = await prisma.parameterFolder.create({
    data: {
      areaFolder: {
        connect: {
          id: areaFolderId,
        },
      },
      parameter: {
        connect: {
          id: parameterId,
        },
      },
      status: Progress.IN_PROGRESS,
    },
  });
  return parameterFolder;
}

export const getParameterFolderById = unstable_cache(
  async (id: string) => {
    const parameterFolder = await prisma.parameterFolder.findUnique({
      where: {
        id,
      },
      include: {
        parameter: {
          include: {
            area: true,
          },
        },
        indicatorFolders: {
          include: {
            evidenceFiles: {
              include: {
                fileVersions: true,
                indicator: true,
                ratings: {
                  include: {
                    accreditor: true,
                  },
                },
              },
            },
          },
        },
        areaFolder: {
          include: {
            taskForce: {
              include: {
                chairPerson: true,
              },
            },
          },
        },
      },
    });
    if (parameterFolder) {
      return {
        ...parameterFolder,
        indicatorFolders: parameterFolder.indicatorFolders.map((indicator) => ({
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
      };
    }
    return null;
  },
  ["getParameterFolderById"],
  {
    tags: ["parameterFolder"],
  }
);

export async function updateParameterFolderById(
  data: Partial<ParameterFolder>
) {
  const session = await verifySession();
  if (!session) return null;
  const parameterFolder = await prisma.parameterFolder.update({
    where: {
      id: data.id,
    },
    data,
  });
  return parameterFolder;
}

export async function updateManyParameterFolderByAreaFolderId(
  areaFolderId: string,
  data: Partial<ParameterFolder>
) {
  const session = await verifySession();
  if (!session) return null;
  const parameterFolder = await prisma.parameterFolder.updateMany({
    where: {
      areaFolderId,
    },
    data,
  });
  return parameterFolder;
}
