import { verifySession } from "../action/session";
import { Rating, SurveyTeamType } from "../generated/prisma";
import { prisma } from "../prisma";
import { getAreaFolderById } from "./area-folder";

export async function createNewRating({
  evidenceFileId,
  type,
  accreditorId,
  adequacy = null,
  effectiveness = null,
  finalRate = null,
  NA = null,
}: {
  evidenceFileId: string;
  type: SurveyTeamType;
  accreditorId: string;
  adequacy?: number | null;
  effectiveness?: number | null;
  finalRate?: number | null;
  NA?: boolean | null;
}) {
  const rating = prisma.rating.create({
    data: {
      evidenceFile: {
        connect: {
          id: evidenceFileId,
        },
      },
      type,
      accreditor: {
        connect: {
          id: accreditorId,
        },
      },
      ...(adequacy !== null && {
        adequacy,
      }),
      ...(effectiveness !== null && {
        effectiveness,
      }),
      ...(finalRate !== null && {
        finalRate,
      }),
      ...(NA !== null && {
        NA,
      }),
    },
  });
  return rating;
}

export async function evidenceFileIsRated(id: string, type: SurveyTeamType) {
  const session = await verifySession();
  if (!session) return null;
  const rating = await prisma.rating.findFirst({
    where: {
      evidenceFileId: id,
      AND: {
        type,
      },
    },
  });
  return rating;
}

export async function updateRatingById({
  id,
  adequacy = null,
  effectiveness = null,
  finalRate = null,
  NA = null,
}: {
  id: string;
  adequacy?: number | null;
  effectiveness?: number | null;
  finalRate?: number | null;
  NA?: boolean | null;
}) {
  const session = await verifySession();
  if (!session) return null;
  const rating = await prisma.rating.update({
    where: {
      id: id,
    },
    data: {
      ...(adequacy !== null && {
        adequacy,
      }),
      ...(effectiveness !== null && {
        effectiveness,
      }),
      ...(finalRate !== null && {
        finalRate,
      }),
      ...(NA !== null && {
        NA,
      }),
    },
  });
  return rating;
}

export async function resetRatingById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const rating = await prisma.rating.update({
    where: {
      id,
    },
    data: {
      adequacy: null,
      effectiveness: null,
      finalRate: null,
      NA: null,
    },
  });
}

export async function getRatingByEvidenceFileId(
  id: string,
  type: SurveyTeamType
) {
  const session = await verifySession();
  if (!session) return null;
  const rating = await prisma.rating.findFirst({
    where: {
      evidenceFileId: id,
      type,
    },
    include: {
      accreditor: true,
    },
  });
  if (rating) {
    return { ...rating, finalRate: Number(rating?.finalRate) };
  }
  return null;
}

export async function resetAreaRatings(areaId: string) {
  const session = await verifySession();
  if (!session) return null;
  const areaFolders = await getAreaFolderById(areaId);
  const ratings = areaFolders?.parameterFolders.flatMap((parameterFolder) =>
    parameterFolder.indicatorFolders.flatMap((indicator) =>
      indicator.evidenceFiles.flatMap((evidence) =>
        evidence.ratings.find((rating) => rating.type === "EXTERNAL")
      )
    )
  );
  ratings?.forEach(
    async (rating) =>
      await prisma.rating.delete({
        where: {
          id: rating?.id,
        },
      })
  );
}
