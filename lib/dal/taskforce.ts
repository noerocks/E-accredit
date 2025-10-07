import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createTaskforce(areaFolderId: string) {
  const session = await verifySession();
  if (!session) return null;
  const taskforce = await prisma.taskForce.create({
    data: {
      areaFolderId,
    },
  });
  return taskforce;
}

export async function assignChairperson(
  personnelId: string,
  areaFolderId: string
) {
  const session = await verifySession();
  if (!session) return null;
  const taskforce = await prisma.taskForce.update({
    where: {
      areaFolderId,
    },
    data: {
      chairPerson: {
        connect: {
          id: personnelId,
        },
      },
    },
  });
  return taskforce;
}
