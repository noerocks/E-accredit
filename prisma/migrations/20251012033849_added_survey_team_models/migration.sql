/*
  Warnings:

  - The values [INTERNAL_ACCREDITOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."SurveyTeamType" AS ENUM ('INTERNAL', 'EXTERNAL');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Role_new" AS ENUM ('ADMIN', 'ACCREDITATION_OFFICER', 'ACCREDITOR', 'PENDING');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "role" TYPE "public"."Role_new" USING ("role"::text::"public"."Role_new");
ALTER TYPE "public"."Role" RENAME TO "Role_old";
ALTER TYPE "public"."Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'PENDING';
COMMIT;

-- CreateTable
CREATE TABLE "public"."SurveyTeam" (
    "id" TEXT NOT NULL,
    "surveyVisitId" TEXT NOT NULL,
    "type" "public"."SurveyTeamType" NOT NULL,
    "teamLeadId" TEXT,

    CONSTRAINT "SurveyTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AreaChair" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "surveyTeamId" TEXT NOT NULL,
    "areaFolderId" TEXT NOT NULL,

    CONSTRAINT "AreaChair_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SurveyTeam_surveyVisitId_key" ON "public"."SurveyTeam"("surveyVisitId");

-- AddForeignKey
ALTER TABLE "public"."SurveyTeam" ADD CONSTRAINT "SurveyTeam_surveyVisitId_fkey" FOREIGN KEY ("surveyVisitId") REFERENCES "public"."SurveyVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SurveyTeam" ADD CONSTRAINT "SurveyTeam_teamLeadId_fkey" FOREIGN KEY ("teamLeadId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaChair" ADD CONSTRAINT "AreaChair_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaChair" ADD CONSTRAINT "AreaChair_surveyTeamId_fkey" FOREIGN KEY ("surveyTeamId") REFERENCES "public"."SurveyTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaChair" ADD CONSTRAINT "AreaChair_areaFolderId_fkey" FOREIGN KEY ("areaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
