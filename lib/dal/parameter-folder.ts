import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { Progress } from "../generated/prisma";

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
              },
            },
          },
        },
      },
    });
    return parameterFolder;
  },
  ["getParameterFolderById"],
  {
    tags: ["parameterFolder"],
  }
);
