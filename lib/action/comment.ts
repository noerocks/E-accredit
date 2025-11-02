"use server";

import { AuditAction, AuditEntity, CommentType } from "../generated/prisma";
import {
  createNewComment as createNewCommentDAL,
  getRecommendationByAreaFolderId,
  getRemarksBySurveyVisitId,
  getStrengthsByAreaFolderId,
  getWeaknessesByAreaFolderId,
  updateCommentById,
} from "../dal/comment";
import { revalidateTag } from "next/cache";
import { getAreaFolderById } from "../dal/area-folder";
import { createActivity } from "../dal/audit";

export async function createNewComment({
  authorId,
  content,
  type,
  evidenceFileId,
  areaFileId,
  recommendedFolderId,
  strongFolderId,
  weakFolderId,
  surveyVisitId,
}: {
  authorId: string;
  content: string;
  type: CommentType;
  evidenceFileId?: string;
  areaFileId?: string;
  recommendedFolderId?: string;
  strongFolderId?: string;
  weakFolderId?: string;
  surveyVisitId?: string;
}) {
  if (!authorId || !content || !type)
    return { failure: { error: "Invalid input" } };
  try {
    if (recommendedFolderId) {
      const areaFolder = await getAreaFolderById(recommendedFolderId);
      const recommendation = await getRecommendationByAreaFolderId(
        recommendedFolderId,
        type
      );
      if (!recommendation) {
        const newRecommendation = await createNewCommentDAL({
          authorId,
          content,
          type,
          recommendedFolderId,
        });
        if (type === "SELF_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.SELF_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Gave recommendations for ${areaFolder?.area.label}`,
          });
        } else if (type === "ACTUAL_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.ACTUAL_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Gave recommendations for ${areaFolder?.area.label}`,
          });
        }
        revalidateTag("activities");
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        revalidateTag("parameterFolder");
        revalidateTag("surveyVisitStructure");
        return { success: { message: "Comment created successfully" } };
      }
      const updatedComment = updateCommentById({
        id: recommendation?.id,
        content,
      });
      if (type === "SELF_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.SELF_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated recommendations in ${areaFolder?.area.label}`,
        });
      } else if (type === "ACTUAL_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated recommendations in ${areaFolder?.area.label}`,
        });
      }
      revalidateTag("activities");
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      revalidateTag("surveyVisitStructure");
      return { success: { message: "Comment updated successfully" } };
    }
    if (strongFolderId) {
      const areaFolder = await getAreaFolderById(strongFolderId);
      const strengths = await getStrengthsByAreaFolderId(strongFolderId, type);
      if (!strengths) {
        const newStrength = await createNewCommentDAL({
          authorId,
          content,
          type,
          strongFolderId,
        });
        if (type === "SELF_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.SELF_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Identified strengths in ${areaFolder?.area.label}`,
          });
        } else if (type === "ACTUAL_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.ACTUAL_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Identified strengths in ${areaFolder?.area.label}`,
          });
        }
        revalidateTag("activities");
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        revalidateTag("parameterFolder");
        revalidateTag("surveyVisitStructure");
        return { success: { message: "Comment created successfully" } };
      }
      const updatedComment = updateCommentById({
        id: strengths?.id,
        content,
      });
      if (type === "SELF_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.SELF_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated strengths in ${areaFolder?.area.label}`,
        });
      } else if (type === "ACTUAL_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated strengths in ${areaFolder?.area.label}`,
        });
      }
      revalidateTag("activities");
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      revalidateTag("surveyVisitStructure");
      return { success: { message: "Comment updated successfully" } };
    }
    if (weakFolderId) {
      const areaFolder = await getAreaFolderById(weakFolderId);
      const weaknesses = await getWeaknessesByAreaFolderId(weakFolderId, type);
      if (!weaknesses) {
        const newWeaknesses = await createNewCommentDAL({
          authorId,
          content,
          type,
          weakFolderId,
        });
        if (type === "SELF_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.SELF_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Identified weaknesses in ${areaFolder?.area.label}`,
          });
        } else if (type === "ACTUAL_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.ACTUAL_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Identified weaknesses in ${areaFolder?.area.label}`,
          });
        }
        revalidateTag("activities");
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        revalidateTag("parameterFolder");
        revalidateTag("surveyVisitStructure");
        return { success: { message: "Comment created successfully" } };
      }
      const updatedComment = updateCommentById({
        id: weaknesses?.id,
        content,
      });
      if (type === "SELF_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.SELF_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated weaknesses in ${areaFolder?.area.label}`,
        });
      } else if (type === "ACTUAL_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated weaknesses in ${areaFolder?.area.label}`,
        });
      }
      revalidateTag("activities");
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      revalidateTag("surveyVisitStructure");
      return { success: { message: "Comment updated successfully" } };
    }
    if (surveyVisitId) {
      const remarks = await getRemarksBySurveyVisitId(surveyVisitId);
      if (!remarks) {
        const newRemarks = await createNewCommentDAL({
          authorId,
          content,
          type,
          surveyVisitId,
        });
        revalidateTag("comments");
        revalidateTag("evidenceFiles");
        revalidateTag("areaFolder");
        revalidateTag("parameterFolder");
        revalidateTag("surveyVisitStructure");
        return { success: { message: "Comment created successfully" } };
      }
      const updatedComment = updateCommentById({
        id: remarks?.id,
        content,
      });
      revalidateTag("comments");
      revalidateTag("evidenceFiles");
      revalidateTag("areaFolder");
      revalidateTag("parameterFolder");
      revalidateTag("surveyVisitStructure");
      return { success: { message: "Comment updated successfully" } };
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
    revalidateTag("parameterFolder");
    revalidateTag("surveyVisitStructure");
    return { success: { message: "Comment created successfully" } };
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
    return { failure: { error: e.message } };
  }
}
