import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createNewAreaChair(
  userId: string,
  surveyTeamId: string,
  areaFolderId: string
) {
  const session = await verifySession();
  if (!session) return null;
  const areaChair = await prisma.areaChair.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      surveyTeam: {
        connect: {
          id: surveyTeamId,
        },
      },
      areaFolder: {
        connect: {
          id: areaFolderId,
        },
      },
    },
  });
  return areaChair;
}

export async function deleteAreaChairById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const areaChair = await prisma.areaChair.delete({
    where: {
      id,
    },
  });
  return areaChair;
}
