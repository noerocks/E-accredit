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

export const getLoginActivities = unstable_cache(
  async () => {
    const activities = await prisma.auditTrail.findMany({
      where: {
        entity: AuditEntity.SYSTEM,
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
  ["getLoginActivities"],
  {
    tags: ["activities"],
  }
);

export const getActivitiesByUserId = unstable_cache(
  async (userId: string) => {
    const activities = await prisma.auditTrail.findMany({
      where: {
        actorId: userId,
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
  ["getActivitiesByUserId"],
  {
    tags: ["activities"],
  }
);
