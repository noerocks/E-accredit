import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { AccreditationDisplayDTO, SafeLevel } from "../dto/accreditation";
import { Accreditation, AccreditationStatus } from "../generated/prisma";
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

export async function updateAccreditationById(data: Partial<Accreditation>) {
  const session = await verifySession();
  if (!session) return null;
  const accreditation = await prisma.accreditation.update({
    where: {
      id: data.id,
    },
    data,
  });
  return accreditation;
}

export const getAccreditations = unstable_cache(
  async () => {
    const accreditations = await prisma.accreditation.findMany({
      include: {
        program: {
          include: {
            programHead: true,
          },
        },
        level: true,
        surveyVisits: {
          include: {
            level: true,
            phaseOneRequirements: {
              include: {
                instrumentFolder: {
                  include: {
                    areaFolders: {
                      include: {
                        taskForce: {
                          include: {
                            chairPerson: {
                              include: {
                                user: true,
                              },
                            },
                            taskForceMember: {
                              include: {
                                programPersonnel: {
                                  include: {
                                    user: true,
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
                        taskForce: {
                          include: {
                            chairPerson: {
                              include: {
                                user: true,
                              },
                            },
                            taskForceMember: {
                              include: {
                                programPersonnel: {
                                  include: {
                                    user: true,
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

export const getActiveAccreditationsCount = unstable_cache(
  async () => {
    const activeAccreditationsCount = await prisma.accreditation.count({
      where: {
        status: "ACTIVE",
      },
    });
    return activeAccreditationsCount;
  },
  ["getActiveAccreditationsCount"],
  {
    tags: ["activeAccreditationsCount"],
  }
);
