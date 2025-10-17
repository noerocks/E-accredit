"use server";

import { CommentType } from "../generated/prisma";
import {
  createNewComment as createNewCommentDAL,
  getInternalRecommendationByAreaFolderId,
  getInternalStrengthsByAreaFolderId,
  getInternalWeaknessesByAreaFolderId,
  updateCommentById,
} from "../dal/comment";
import { revalidateTag } from "next/cache";

export async function createNewComment({
  authorId,
  content,
  type,
  evidenceFileId,
  areaFileId,
  recommendedFolderId,
  strongFolderId,
  weakFolderId,
}: {
  authorId: string;
  content: string;
  type: CommentType;
  evidenceFileId?: string;
  areaFileId?: string;
  recommendedFolderId?: string;
  strongFolderId?: string;
  weakFolderId?: string;
}) {
  console.log(strongFolderId);
  if (!authorId || !content || !type)
    return { failure: { error: "Invalid input" } };
  try {
    if (recommendedFolderId) {
      const recommendation = await getInternalRecommendationByAreaFolderId(
        recommendedFolderId
      );
      if (!recommendation) {
        const newRecommendation = await createNewCommentDAL({
          authorId,
          content,
          type,
          recommendedFolderId,
        });
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        return { success: { message: "Comment created successfuly" } };
      }
      const updatedComment = updateCommentById({
        id: recommendation?.id,
        content,
      });
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      return { success: { message: "Comment updated successfuly" } };
    }
    if (strongFolderId) {
      const strengths = await getInternalStrengthsByAreaFolderId(
        strongFolderId
      );
      if (!strengths) {
        const newStrength = await createNewCommentDAL({
          authorId,
          content,
          type,
          strongFolderId,
        });
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        return { success: { message: "Comment created successfuly" } };
      }
      const updatedComment = updateCommentById({
        id: strengths?.id,
        content,
      });
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      return { success: { message: "Comment updated successfuly" } };
    }
    if (weakFolderId) {
      const weaknesses = await getInternalWeaknessesByAreaFolderId(
        weakFolderId
      );
      if (!weaknesses) {
        const newWeaknesses = await createNewCommentDAL({
          authorId,
          content,
          type,
          weakFolderId,
        });
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        return { success: { message: "Comment created successfuly" } };
      }
      const updatedComment = updateCommentById({
        id: weaknesses?.id,
        content,
      });
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      return { success: { message: "Comment updated successfuly" } };
    }
    const comment = await createNewCommentDAL({
      authorId,
      content,
      type,
      evidenceFileId,
      areaFileId,
      recommendedFolderId,
      strongFolderId,
      weakFolderId,
    });
    revalidateTag("comments");
    revalidateTag("evidenceFiles");
    revalidateTag("areaFolder");
    return { success: { message: "Comment created successfuly" } };
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
    return { failure: { error: e.message } };
  }
}
