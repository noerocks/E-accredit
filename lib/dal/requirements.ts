import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createPhaseOneRequirements(
  surveyVisitId: string,
  instrumentId: string
) {
  const session = await verifySession();
  if (!session) return null;
  const requirements = await prisma.phaseOneRequirements.create({
    data: {
      surveyVisit: {
        connect: {
          id: surveyVisitId,
        },
      },
      instrument: {
        connect: {
          id: instrumentId,
        },
      },
    },
  });
  return requirements;
}

export async function createPhaseTwoRequirements(
  surveyVisitId: string,
  instrumentId: string
) {
  const session = await verifySession();
  if (!session) return null;
  const requirements = await prisma.phaseTwoRequirements.create({
    data: {
      surveyVisit: {
        connect: {
          id: surveyVisitId,
        },
      },
      instrument: {
        connect: {
          id: instrumentId,
        },
      },
      phaseTwoFolder: {
        create: {},
      },
    },
    include: {
      phaseTwoFolder: true,
    },
  });
  return requirements;
}
