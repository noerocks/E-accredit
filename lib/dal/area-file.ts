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
