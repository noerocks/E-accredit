import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { AccreditationDisplayDTO, SafeLevel } from "../dto/accreditation";
import { AccreditationStatus } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createAccreditation(
  programId: string,
  status: AccreditationStatus
) {
  const session = await verifySession();
  if (!session) return null;
  const accreditation = await prisma.accreditation.create({
    data: {
      programId,
      status,
    },
  });
  return accreditation;
}

export const getAccreditations = unstable_cache(
  async (): Promise<AccreditationDisplayDTO[] | null> => {
    const accreditations = await prisma.accreditation.findMany({
      include: {
        program: true,
        level: true,
        surveyVisits: {
          include: {
            level: true,
          },
        },
      },
    });
    return accreditations.map((a) => ({
      ...a,
      level: {
        ...a.level,
        requiredAreaMean: Number(a.level?.requiredAreaMean),
        requiredGrandMean: Number(a.level?.requiredGrandMean),
      } as SafeLevel,
      surveyVisits: a.surveyVisits.map((sv) => ({
        ...sv,
        level: {
          ...sv.level,
          requiredAreaMean: Number(sv.level.requiredAreaMean),
          requiredGrandMean: Number(sv.level.requiredGrandMean),
        },
      })),
    }));
  },
  ["getAccreditations"],
  {
    tags: ["accreditations"],
  }
);

export async function getAccreditationStructureById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const accreditationStructure = await prisma.accreditation.findUnique({
    where: {
      id,
    },
    include: {
      program: true,
      level: true,
      surveyVisits: {
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
                              evidenceFiles: true,
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
      },
    },
  });
  return accreditationStructure;
}
