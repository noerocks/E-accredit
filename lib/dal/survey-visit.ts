import { verifySession } from "../action/session";
import { AccreditationStatus, SurveyVisitType } from "../generated/prisma";
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
      type: SurveyVisitType.FIRST,
      status: AccreditationStatus.IN_PROGRESS,
    },
    include: {
      phaseOneRequirements: true,
      phaseTwoRequirements: true,
    },
  });
  return surveyVisit;
}
