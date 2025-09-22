import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createSurveyVisit(
  accreditationId: string,
  targetLevelId: string,
  instrumentId: string
) {
  const session = await verifySession();
  const surveyVisit = await prisma.surveyVisit.create({
    data: {
      level: {
        connect: {
          id: targetLevelId,
        },
      },
      accreditation: {
        connect: {
          id: accreditationId,
        },
      },
      phaseOneRequirements: {
        create: {
          instrumentId,
        },
      },
    },
    include: {
      phaseOneRequirements: true,
    },
  });
  return surveyVisit;
}
