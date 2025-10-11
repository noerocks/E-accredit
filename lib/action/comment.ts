"use server";

import { CommentType } from "../generated/prisma";
import { createNewComment as createNewCommentDAL } from "../dal/comment";
import { revalidateTag } from "next/cache";

export async function createNewComment({
  authorId,
  content,
  type,
  evidenceFileId,
  areaFileId,
}: {
  authorId: string;
  content: string;
  type: CommentType;
  evidenceFileId?: string;
  areaFileId?: string;
}) {
  if (!authorId || !content || !type)
    return { failure: { error: "Invalid input" } };
  try {
    const comment = await createNewCommentDAL({
      authorId,
      content,
      type,
      evidenceFileId,
      areaFileId,
    });
    revalidateTag("comments");
    return { success: { message: "Comment created successfuly" } };
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
    return { failure: { error: e.message } };
  }
}
