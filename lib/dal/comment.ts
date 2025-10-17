import { connect } from "http2";
import { verifySession } from "../action/session";
import { Comment, CommentType } from "../generated/prisma";
import { prisma } from "../prisma";
import { unstable_cache } from "next/cache";

export async function createNewComment({
  authorId,
  content,
  type,
  evidenceFileId = null,
  areaFileId = null,
  recommendedFolderId = null,
  strongFolderId = null,
  weakFolderId = null,
}: {
  authorId: string;
  content: string;
  type: CommentType;
  evidenceFileId?: string | null;
  areaFileId?: string | null;
  recommendedFolderId?: string | null;
  strongFolderId?: string | null;
  weakFolderId?: string | null;
}) {
  const session = await verifySession();
  if (!session) return null;
  const comment = await prisma.comment.create({
    data: {
      author: {
        connect: {
          id: authorId,
        },
      },
      ...(evidenceFileId && {
        evidenceFile: {
          connect: {
            id: evidenceFileId,
          },
        },
      }),
      ...(areaFileId && {
        areaFile: {
          connect: {
            id: areaFileId,
          },
        },
      }),
      ...(recommendedFolderId && {
        recommendedFolder: {
          connect: {
            id: recommendedFolderId,
          },
        },
      }),
      ...(strongFolderId && {
        strongFolder: {
          connect: {
            id: strongFolderId,
          },
        },
      }),
      ...(weakFolderId && {
        weakFolder: {
          connect: {
            id: weakFolderId,
          },
        },
      }),
      content,
      type,
    },
  });
  return comment;
}

export const getFilteredComments = unstable_cache(
  async ({
    evidenceFileId,
    areaFileId,
    type,
  }: {
    evidenceFileId?: string;
    areaFileId?: string;
    type: CommentType;
  }) => {
    const comments = await prisma.comment.findMany({
      where: {
        evidenceFileId: evidenceFileId || undefined,
        areaFileId: areaFileId || undefined,
        type,
      },
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return comments;
  },
  ["getFilteredComments"],
  {
    tags: ["comments"],
  }
);

export async function getInternalRecommendationByAreaFolderId(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const recommendation = await prisma.comment.findFirst({
    where: {
      recommendedFolderId: id,
      AND: {
        type: CommentType.SELF_SURVEY,
      },
    },
  });
  return recommendation;
}

export async function getInternalStrengthsByAreaFolderId(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const strengths = await prisma.comment.findFirst({
    where: {
      strongFolderId: id,
      AND: {
        type: CommentType.SELF_SURVEY,
      },
    },
  });
  return strengths;
}

export async function getInternalWeaknessesByAreaFolderId(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const weaknesses = await prisma.comment.findFirst({
    where: {
      weakFolderId: id,
      AND: {
        type: CommentType.SELF_SURVEY,
      },
    },
  });
  return weaknesses;
}

export async function updateCommentById(data: Partial<Comment>) {
  const session = await verifySession();
  if (!session) return null;
  const comment = await prisma.comment.update({
    where: {
      id: data.id,
    },
    data,
  });
  return comment;
}
