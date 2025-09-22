import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createParameterFolder(
  areaFolderId: string,
  parameterId: number,
  folderId: string
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
      folderId,
    },
  });
  return parameterFolder;
}
