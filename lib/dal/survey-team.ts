import { verifySession } from "../action/session";
import { SurveyTeamType } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createManySurveyTeam(
  teams: {
    surveyVisitId: string;
    type: SurveyTeamType;
  }[]
) {
  const session = await verifySession();
  if (!session) return null;
  const surveyTeam = await prisma.surveyTeam.createMany({
    data: teams,
  });
  return surveyTeam;
}
