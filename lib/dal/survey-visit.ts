import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import {
  Progress,
  SurveyStatus,
  SurveyVisit,
  SurveyVisitType,
} from "../generated/prisma";
import { prisma } from "../prisma";
import { SurveyVisitDisplayDTO } from "../dto/survey-visit";

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

export const getSurveyVisitStructureById = unstable_cache(
  async (id: string) => {
    const surveyVisitStructure = await prisma.surveyVisit.findUnique({
      where: {
        id,
      },
      include: {
        accreditation: {
          include: {
            program: {
              include: {
                programHead: true,
              },
            },
          },
        },
        level: true,
        phaseOneRequirements: {
          include: {
            instrumentFolder: {
              include: {
                areaFolders: {
                  include: {
                    strengths: true,
                    weaknesses: true,
                    recommendations: true,
                    taskForce: {
                      include: {
                        chairPerson: {
                          include: {
                            user: true,
                          },
                        },
                        taskForceMember: {
                          include: {
                            programPersonnel: true,
                          },
                        },
                      },
                    },
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
                                ratings: {
                                  include: {
                                    accreditor: true,
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
    if (surveyVisitStructure) {
      return {
        ...surveyVisitStructure,
        phaseOneRequirements: {
          ...surveyVisitStructure.phaseOneRequirements,
          instrumentFolder: {
            ...surveyVisitStructure.phaseOneRequirements?.instrumentFolder,
            areaFolders:
              surveyVisitStructure.phaseOneRequirements?.instrumentFolder?.areaFolders.map(
                (area) => ({
                  ...area,
                  parameterFolders: area.parameterFolders.map((parameter) => ({
                    ...parameter,
                    indicatorFolders: parameter.indicatorFolders.map(
                      (indicator) => ({
                        ...indicator,
                        evidenceFiles: indicator.evidenceFiles.map(
                          (evidence) => ({
                            ...evidence,
                            ratings: evidence.ratings.map((rating) => ({
                              ...rating,
                              finalRate: Number(rating.finalRate),
                            })),
                          })
                        ),
                      })
                    ),
                  })),
                })
              ),
          },
        },
      };
    }
    return surveyVisitStructure;
  },
  ["getSurveyVisitStructureById"],
  { tags: ["surveyVisitStructure"] }
);

export async function updateSurveyVisitById(data: Partial<SurveyVisit>) {
  const session = await verifySession();
  if (!session) return null;
  const surveyVisit = await prisma.surveyVisit.update({
    where: {
      id: data.id,
    },
    data,
  });
  return surveyVisit;
}

export const getAllSurveyVisitOpenForSelfSurvey = unstable_cache(
  async (): Promise<SurveyVisitDisplayDTO[] | null> => {
    const surveyVisit = await prisma.surveyVisit.findMany({
      where: {
        OR: [
          {
            selfSurveyStatus: SurveyStatus.COMPLETE,
          },
          {
            openForSelfSurvey: true,
          },
        ],
      },
      include: {
        accreditation: {
          include: {
            program: true,
          },
        },
        level: true,
      },
    });
    return surveyVisit;
  },
  ["getAllSurveyVisitOpenForSelfSurvey"],
  {
    tags: ["surveyVisitSelfSurvey"],
  }
);
