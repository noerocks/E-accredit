import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { AuditAction, AuditEntity } from "../generated/prisma";
import { prisma } from "../prisma";
import { sortBy } from "lodash";

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

export interface ActivityChartData {
  date: string;
  count: number;
}

export interface ActivityInsights {
  totalActions: number;
  busiestDay: string;
  mostActiveUser: string;
}

export interface ActivityData {
  chartData: ActivityChartData[];
  insights: ActivityInsights;
}

export const getAllActivitiesWithInsights = async (): Promise<ActivityData> => {
  const activities = await prisma.auditTrail.findMany({
    include: {
      actor: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const groupedByDate: Record<string, number> = {};
  activities.forEach((act) => {
    const date = act.createdAt.toISOString().split("T")[0];
    groupedByDate[date] = (groupedByDate[date] || 0) + 1;
  });

  const chartData = Object.entries(groupedByDate).map(([date, count]) => ({
    date,
    count,
  }));

  const totalActions = activities.length;

  const busiestDayEntry = sortBy(
    Object.entries(groupedByDate),
    ([, count]) => -count
  )[0];
  const busiestDay = busiestDayEntry ? busiestDayEntry[0] : "";

  const userCount: Record<string, number> = {};
  activities.forEach((entry) => {
    const name = `${entry.actor.firstName} ${entry.actor.lastName}`;
    userCount[name] = (userCount[name] || 0) + 1;
  });
  const mostActiveUser =
    sortBy(Object.entries(userCount), ([, count]) => -count)[0]?.[0] || "";

  return {
    chartData,
    insights: { totalActions, busiestDay, mostActiveUser },
  };
};
