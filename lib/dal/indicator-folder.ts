import { verifySession } from "../action/session";
import { Category } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createIndicatorFolder(
  parameterFolderId: string,
  folderId: string,
  category: Category
) {
  const session = await verifySession();
  if (!session) return null;
  const indicatorFolder = await prisma.indicatorFolder.create({
    data: {
      parameterFolder: {
        connect: {
          id: parameterFolderId,
        },
      },
      folderId,
      category,
    },
  });
  return indicatorFolder;
}
