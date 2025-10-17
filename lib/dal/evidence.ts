import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { FileStatus } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createManyEvidenceFiles(
  evidenceFiles: {
    indicatorFolderId: string;
    indicatorId: number;
    status: FileStatus;
  }[]
) {
  const session = await verifySession();
  if (!session) return null;
  const evidences = await prisma.evidenceFile.createMany({
    data: evidenceFiles,
  });
  return evidences;
}

export const getEvidenceFileById = unstable_cache(
  async (id: string) => {
    const evidence = await prisma.evidenceFile.findUnique({
      where: {
        id,
      },
      include: {
        indicator: true,
        comments: {
          include: {
            author: true,
          },
        },
        ratings: {
          include: {
            accreditor: true,
          },
        },
        fileVersions: {
          orderBy: {
            uploadedAt: "desc",
          },
        },
        indicatorFolder: {
          include: {
            parameterFolder: {
              include: {
                parameter: true,
                areaFolder: {
                  include: {
                    areaChair: {
                      include: {
                        user: true,
                        surveyTeam: true,
                      },
                    },
                    taskForce: {
                      include: {
                        chairPerson: true,
                        taskForceMember: {
                          include: {
                            programPersonnel: true,
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
    return {
      ...evidence,
      ratings: evidence?.ratings.map((rating) => ({
        ...rating,
        finalRate: Number(rating.finalRate),
      })),
    };
  },
  ["getEvidenceFileById"],
  {
    tags: ["evidenceFiles"],
  }
);
