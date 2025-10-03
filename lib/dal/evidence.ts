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
        fileVersions: {
          include: {
            evidenceFile: true,
          },
          orderBy: {
            uploadedAt: "desc",
          },
        },
        indicatorFolder: {
          include: {
            parameterFolder: {
              include: {
                parameter: true,
              },
            },
          },
        },
      },
    });
    return evidence;
  },
  ["getEvidenceFileById"],
  {
    tags: ["evidenceFiles"],
  }
);
