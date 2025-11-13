import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface TimeSeriesData {
  date: string;
  value: number;
}

export interface ProgramMetrics {
  totalPrograms: number;
  accreditedPrograms: number;
  pendingAccreditation: number;
  expiredAccreditation: number;
}

export interface SurveyMetrics {
  totalSurveys: number;
  completedSurveys: number;
  ongoingSurveys: number;
  pendingSurveys: number;
}

export interface UserMetrics {
  totalUsers: number;
  activeUsers: number;
  pendingUsers: number;
  byRole: ChartData[];
}

export interface AreaProgressData {
  area: string;
  progress: number;
  completed: number;
  total: number;
}

class DashboardDAL {
  // Program-related metrics
  async getProgramMetrics(): Promise<ProgramMetrics> {
    const totalPrograms = await prisma.program.count();
    const accreditedPrograms = await prisma.accreditation.count({
      where: { status: "ACTIVE" },
    });
    const pendingAccreditation = await prisma.accreditation.count({
      where: { status: "UNACCREDITED" },
    });
    const expiredAccreditation = await prisma.accreditation.count({
      where: { status: "EXPIRED" },
    });

    return {
      totalPrograms,
      accreditedPrograms,
      pendingAccreditation,
      expiredAccreditation,
    };
  }

  async getProgramsByDepartment(): Promise<ChartData[]> {
    const programs = await prisma.program.groupBy({
      by: ["department"],
      _count: {
        id: true,
      },
    });

    return programs.map((program) => ({
      name: program.department,
      value: program._count.id,
    }));
  }

  async getAccreditationLevelDistribution(): Promise<ChartData[]> {
    const accreditations = await prisma.accreditation.groupBy({
      by: ["currentLevel"],
      _count: {
        id: true,
      },
      where: {
        NOT: { currentLevel: null },
      },
    });

    const levels = await prisma.level.findMany({
      where: {
        id: {
          in: accreditations.map((acc) => acc.currentLevel!).filter(Boolean),
        },
      },
    });

    return accreditations.map((acc) => {
      const level = levels.find((l) => l.id === acc.currentLevel);
      return {
        name: level?.label || "Unknown",
        value: acc._count.id,
      };
    });
  }

  // Survey-related metrics
  async getSurveyMetrics(): Promise<SurveyMetrics> {
    const totalSurveys = await prisma.surveyVisit.count();
    const completedSurveys = await prisma.surveyVisit.count({
      where: { status: "COMPLETE" },
    });
    const ongoingSurveys = await prisma.surveyVisit.count({
      where: { status: "IN_PROGRESS" },
    });
    const pendingSurveys = await prisma.surveyVisit.count({
      where: { status: "PENDING" },
    });

    return {
      totalSurveys,
      completedSurveys,
      ongoingSurveys,
      pendingSurveys,
    };
  }

  async getSurveyResultsDistribution(): Promise<ChartData[]> {
    const results = await prisma.surveyVisit.groupBy({
      by: ["surveyResultStatus"],
      _count: {
        id: true,
      },
    });

    return results.map((result) => ({
      name: result.surveyResultStatus,
      value: result._count.id,
    }));
  }

  async getSurveyTypeDistribution(): Promise<ChartData[]> {
    const types = await prisma.surveyVisit.groupBy({
      by: ["type"],
      _count: {
        id: true,
      },
    });

    return types.map((type) => ({
      name: type.type,
      value: type._count.id,
    }));
  }

  // User-related metrics
  async getUserMetrics(): Promise<UserMetrics> {
    const totalUsers = await prisma.user.count();
    const activeUsers = await prisma.user.count({
      where: { role: { not: "PENDING" } },
    });
    const pendingUsers = await prisma.user.count({
      where: { role: "PENDING" },
    });

    const roles = await prisma.user.groupBy({
      by: ["role"],
      _count: {
        id: true,
      },
    });

    const byRole = roles.map((role) => ({
      name: role.role,
      value: role._count.id,
    }));

    return {
      totalUsers,
      activeUsers,
      pendingUsers,
      byRole,
    };
  }

  // Area and Progress metrics
  async getAreaProgress(surveyVisitId?: string): Promise<AreaProgressData[]> {
    const whereClause = surveyVisitId
      ? { instrumentFolder: { phaseOneRequirements: { surveyVisitId } } }
      : {};

    const areaFolders = await prisma.areaFolder.findMany({
      where: whereClause,
      include: {
        area: true,
        parameterFolders: {
          include: {
            indicatorFolders: true,
          },
        },
      },
    });

    return areaFolders.map((folder) => {
      const totalIndicators = folder.parameterFolders.reduce(
        (sum, param) => sum + param.indicatorFolders.length,
        0
      );

      const completedIndicators = folder.parameterFolders.reduce(
        (sum, param) =>
          sum +
          param.indicatorFolders.filter((ind) =>
            ind.evidenceFiles.some((ef) => ef.status === "ACCEPTED")
          ).length,
        0
      );

      const progress =
        totalIndicators > 0 ? (completedIndicators / totalIndicators) * 100 : 0;

      return {
        area: folder.area.label,
        progress: Math.round(progress),
        completed: completedIndicators,
        total: totalIndicators,
      };
    });
  }

  async getFileUploadTrends(days: number = 30): Promise<TimeSeriesData[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const fileVersions = await prisma.fileVersion.findMany({
      where: {
        uploadedAt: {
          gte: startDate,
        },
      },
      select: {
        uploadedAt: true,
      },
      orderBy: {
        uploadedAt: "asc",
      },
    });

    // Group by date
    const dailyCounts = fileVersions.reduce(
      (acc, file) => {
        const date = file.uploadedAt.toISOString().split("T")[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(dailyCounts).map(([date, value]) => ({
      date,
      value,
    }));
  }

  async getAuditActivity(days: number = 7): Promise<TimeSeriesData[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const auditTrails = await prisma.auditTrail.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const dailyCounts = auditTrails.reduce(
      (acc, audit) => {
        const date = audit.createdAt.toISOString().split("T")[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(dailyCounts).map(([date, value]) => ({
      date,
      value,
    }));
  }

  // Composite dashboard data
  async getDashboardOverview() {
    const [
      programMetrics,
      surveyMetrics,
      userMetrics,
      programByDept,
      accreditationLevels,
      surveyResults,
      surveyTypes,
      fileTrends,
      auditActivity,
    ] = await Promise.all([
      this.getProgramMetrics(),
      this.getSurveyMetrics(),
      this.getUserMetrics(),
      this.getProgramsByDepartment(),
      this.getAccreditationLevelDistribution(),
      this.getSurveyResultsDistribution(),
      this.getSurveyTypeDistribution(),
      this.getFileUploadTrends(),
      this.getAuditActivity(),
    ]);

    return {
      programMetrics,
      surveyMetrics,
      userMetrics,
      programByDept,
      accreditationLevels,
      surveyResults,
      surveyTypes,
      fileTrends,
      auditActivity,
    };
  }
}

export const dashboardDAL = new DashboardDAL();
