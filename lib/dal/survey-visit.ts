import { verifySession } from "../action/session";
import { AccreditationStatus, SurveyVisitType } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createSurveyVisit(
  accreditationId: string,
  actualSurveyDate: Date,
  surveyVisitType: SurveyVisitType,
  targetLevelId: string,
  status: AccreditationStatus,
  instrumentId: string
) {
  const session = await verifySession();
  if (!session) return null;
  const surveyVisit = await prisma.surveyVisit.create({
    data: {
      actualSurveyDate,
      type: surveyVisitType,
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
      status: status,
    },
    include: {
      phaseOneRequirements: true,
      phaseTwoRequirements: true,
    },
  });
  return surveyVisit;
}
