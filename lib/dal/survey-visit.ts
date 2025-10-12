import { verifySession } from "../action/session";
import { Progress, SurveyVisitType } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createSurveyVisit(
  accreditationId: string,
  actualSurveyDate: Date,
  surveyVisitType: SurveyVisitType,
  targetLevelId: string,
  status: Progress
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
      status: status,
    },
    include: {
      phaseOneRequirements: true,
      phaseTwoRequirements: true,
    },
  });
  return surveyVisit;
}

export async function getSurveyVisitById(id: string) {
  const surveyVisit = await prisma.surveyVisit.findUnique({
    where: {
      id,
    },
    include: {
      surveyTeam: {
        include: {
          areaChairs: true,
        },
      },
    },
  });
  return surveyVisit;
}

export async function getSurveyVisitStructureById(id: string) {
  const surveyVisitStructure = await prisma.surveyVisit.findUnique({
    where: {
      id,
    },
    include: {
      level: true,
      phaseOneRequirements: {
        include: {
          instrumentFolder: {
            include: {
              areaFolders: {
                include: {
                  area: true,
                  areaFiles: true,
                  parameterFolders: {
                    include: {
                      parameter: true,
                      indicatorFolders: {
                        include: {
                          evidenceFiles: {
                            include: {
                              indicator: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      phaseTwoRequirements: {
        include: {
          phaseTwoFolder: {
            include: {
              phaseTwoAreaFolders: {
                include: {
                  area: true,
                  areaFiles: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return surveyVisitStructure;
}
