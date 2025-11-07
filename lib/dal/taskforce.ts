import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createTaskforce({
  areaFolderId = null,
  phaseTwoAreaFolderId = null,
}: {
  areaFolderId?: string | null;
  phaseTwoAreaFolderId?: string | null;
}) {
  const session = await verifySession();
  if (!session) return null;
  const taskforce = await prisma.taskForce.create({
    data: {
      ...(areaFolderId && {
        areaFolder: {
          connect: {
            id: areaFolderId,
          },
        },
      }),
      ...(phaseTwoAreaFolderId && {
        phaseTwoAreaFolder: {
          connect: {
            id: phaseTwoAreaFolderId,
          },
        },
      }),
    },
  });
  return taskforce;
}

export async function assignChairperson({
  personnelId,
  areaFolderId,
  phaseTwoAreaFolderId,
}: {
  personnelId: string;
  areaFolderId?: string | null;
  phaseTwoAreaFolderId?: string | null;
}) {
  const session = await verifySession();
  if (!session) return null;

  const where = areaFolderId
    ? { areaFolderId }
    : phaseTwoAreaFolderId
      ? { phaseTwoAreaFolderId }
      : null;

  if (!where) throw new Error("No unique id provided");

  return prisma.taskForce.update({
    where,
    data: {
      chairPerson: {
        connect: { id: personnelId },
      },
    },
  });
}
