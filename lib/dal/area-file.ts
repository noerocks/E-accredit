import { verifySession } from "../action/session";
import { AreaFileType } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createManyAreaFiles(
  data: {
    phaseOneAreaFolderId?: string;
    phaseTwoAreaFolderId?: string;
    type: AreaFileType;
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
