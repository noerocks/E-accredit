import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { AuditAction, AuditEntity } from "../generated/prisma";
import { prisma } from "../prisma";

export async function createActivity(data: {
  actorId: string;
  action: AuditAction;
  entity: AuditEntity;
  portfolioId?: string;
  description: string;
}) {
  const session = await verifySession();
  if (!session) return null;
  const activity = await prisma.auditTrail.create({
    data,
  });
  return activity;
}

export const getActivitiesBySurveyVisitId = unstable_cache(
  async (id: string, entity: AuditEntity) => {
    const activities = await prisma.auditTrail.findMany({
      where: {
        portfolioId: id,
        entity,
      },
      include: {
        actor: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return activities;
  },
  ["getActivitiesBySurveyVisitId"],
  {
    tags: ["activities"],
  }
);
