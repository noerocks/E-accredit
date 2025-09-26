import { verifySession } from "../action/session";
import { SurveyStatus, SurveyVisitType } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createSurveyVisit(
  accreditationId: string,
  actualSurveyDate: Date,
  surveyVisitType: SurveyVisitType,
  targetLevelId: string,
  status: SurveyStatus,
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

export async function getSurveyVisitStructureById(id: string) {
  const surveyVisitStructure = await prisma.surveyVisit.findUnique({
    where: {
      id,
    },
    include: {
      level: true,
      phaseOneRequirements: {
        include: {
          instrument: {
            include: {
              area: {
                include: {
                  parameter: {
                    include: {
                      indicator: true,
                    },
                  },
                },
              },
            },
          },
          instrumentFolder: {
            include: {
              areaFolders: {
                include: {
                  area: true,
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
                  taskForce: {
                    include: {
                      chairPerson: {
                        include: {
                          user: true,
                        },
                      },
                      taskForceMember: {},
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}
