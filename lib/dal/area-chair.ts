import { verifySession } from "../action/session";
import { SurveyTeamType } from "../generated/prisma";
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

export async function deleteCurrentAreaChair(
  surveyTeamId: string,
  type: SurveyTeamType
) {
  const session = await verifySession();
  if (!session) return null;
  const surveyTeam = await prisma.surveyTeam.findUnique({
    where: {
      id: surveyTeamId,
      type,
    },
    include: {
      areaChairs: true,
    },
  });
  if (!surveyTeam || surveyTeam.areaChairs.length === 0) {
    return null;
  }
  const deletedAreaChair = await prisma.areaChair.delete({
    where: {
      id: surveyTeam.areaChairs[0].id,
    },
  });
}
