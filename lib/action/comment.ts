"use server";

import { CommentType } from "../generated/prisma";
import {
  createNewComment as createNewCommentDAL,
  getInternalRecommendationByAreaFolderId,
  updateCommentById,
} from "../dal/comment";
import { revalidateTag } from "next/cache";

export async function createNewComment({
  authorId,
  content,
  type,
  evidenceFileId,
  areaFileId,
  areaFolderId,
}: {
  authorId: string;
  content: string;
  type: CommentType;
  evidenceFileId?: string;
  areaFileId?: string;
  areaFolderId?: string;
}) {
  if (!authorId || !content || !type)
    return { failure: { error: "Invalid input" } };
  try {
    if (areaFolderId) {
      const recommendation = await getInternalRecommendationByAreaFolderId(
        areaFolderId
      );
      if (!recommendation) {
        const newRecommendation = await createNewCommentDAL({
          authorId,
          content,
          type,
          areaFolderId,
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
    const comment = await createNewCommentDAL({
      authorId,
      content,
      type,
      evidenceFileId,
      areaFileId,
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
