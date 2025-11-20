"use server";

import { AuditAction, AuditEntity, CommentType } from "../generated/prisma";
import {
  createNewComment as createNewCommentDAL,
  getImprovementsByAreaFolderId,
  getRecommendationByAreaFolderId,
  getRemarksBySurveyVisitId,
  getStrengthsByAreaFolderId,
  getWeaknessesByAreaFolderId,
  updateCommentById,
} from "../dal/comment";
import { revalidateTag } from "next/cache";
import { getAreaFolderById } from "../dal/area-folder";
import { createActivity } from "../dal/audit";
import { formatAccreditationName } from "../utils";
import { getSurveyVisitStructureById } from "../dal/survey-visit";

export async function createNewComment({
  authorId,
  content,
  type,
  evidenceFileId,
  areaFileId,
  recommendedFolderId,
  strongFolderId,
  weakFolderId,
  improvementsId,
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
  improvementsId?: string;
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
    if (improvementsId) {
      const areaFolder = await getAreaFolderById(improvementsId);
      const improvements = await getImprovementsByAreaFolderId(
        improvementsId,
        type
      );
      if (!improvements) {
        const newImprovements = await createNewCommentDAL({
          authorId,
          content,
          type,
          improvementsId,
        });
        if (type === "SELF_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.SELF_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Identified improvements in ${areaFolder?.area.label}`,
          });
        } else if (type === "ACTUAL_SURVEY") {
          await createActivity({
            actorId: authorId,
            action: AuditAction.COMMENT,
            entity: AuditEntity.ACTUAL_SURVEY,
            portfolioId:
              areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
                ?.id,
            description: `Identified improvements in ${areaFolder?.area.label}`,
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
        id: improvements?.id,
        content,
      });
      if (type === "SELF_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.SELF_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated improvements in ${areaFolder?.area.label}`,
        });
      } else if (type === "ACTUAL_SURVEY") {
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId:
            areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit?.id,
          description: `Updated improvements in ${areaFolder?.area.label}`,
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
      const surveyVisitStructure =
        await getSurveyVisitStructureById(surveyVisitId);
      if (!remarks) {
        const newRemarks = await createNewCommentDAL({
          authorId,
          content,
          type,
          surveyVisitId,
        });
        await createActivity({
          actorId: authorId,
          action: AuditAction.COMMENT,
          entity: AuditEntity.ACTUAL_SURVEY,
          portfolioId: surveyVisitId,
          description: `Submitted remarks for ${formatAccreditationName(
            surveyVisitStructure?.accreditation.program.code!,
            surveyVisitStructure?.level!
          )}`,
        });
        revalidateTag("activities");
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
      await createActivity({
        actorId: authorId,
        action: AuditAction.COMMENT,
        entity: AuditEntity.ACTUAL_SURVEY,
        portfolioId: surveyVisitId,
        description: `Updated remarks for ${formatAccreditationName(
          surveyVisitStructure?.accreditation.program.code!,
          surveyVisitStructure?.level!
        )}`,
      });
      revalidateTag("activities");
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
