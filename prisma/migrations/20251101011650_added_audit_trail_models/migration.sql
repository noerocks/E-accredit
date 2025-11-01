-- CreateEnum
CREATE TYPE "AuditEntity" AS ENUM ('PORTFOLIO', 'SURVEY', 'SYSTEM');

-- CreateEnum
CREATE TYPE "AuditAction" AS ENUM ('FILE_UPLOAD', 'FILE_EDIT', 'FILE_DELETE', 'FILE_REVIEW', 'PARAMETER_REVIEW', 'AREA_REVIEW', 'PORTFOLIO_REVIEW', 'LOGIN', 'LOGOUT', 'RATE', 'SURVEY_START', 'SURVEY_END', 'COMMENT');

-- CreateTable
CREATE TABLE "AuditTrail" (
    "id" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "action" "AuditAction" NOT NULL,
    "entity" "AuditEntity" NOT NULL,
    "portfolioId" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditTrail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuditTrail" ADD CONSTRAINT "AuditTrail_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditTrail" ADD CONSTRAINT "AuditTrail_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "SurveyVisit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
