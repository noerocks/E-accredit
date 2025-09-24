/*
  Warnings:

  - You are about to drop the column `phase` on the `Accreditation` table. All the data in the column will be lost.
  - Added the required column `actualSurveyDate` to the `Accreditation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `SurveyVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `SurveyVisit` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AccreditationStatus" AS ENUM ('IN_PROGRESS', 'COMPLETE');

-- CreateEnum
CREATE TYPE "public"."SurveyVisitType" AS ENUM ('FIRST', 'REVISIT');

-- CreateEnum
CREATE TYPE "public"."AreaFileType" AS ENUM ('PPP', 'COMPLIANCE_REPORT', 'NARRATIVE_PROFILE');

-- AlterTable
ALTER TABLE "public"."Accreditation" DROP COLUMN "phase",
ADD COLUMN     "actualSurveyDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."AreaFolder" ADD COLUMN     "complete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."SurveyVisit" ADD COLUMN     "status" "public"."AccreditationStatus" NOT NULL,
ADD COLUMN     "type" "public"."SurveyVisitType" NOT NULL;

-- CreateTable
CREATE TABLE "public"."PhaseTwoRequirements" (
    "id" TEXT NOT NULL,
    "surveyVisitId" TEXT,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "PhaseTwoRequirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PhaseTwoFolder" (
    "id" TEXT NOT NULL,
    "phaseTwoRequirementsId" TEXT,
    "folderId" TEXT NOT NULL,

    CONSTRAINT "PhaseTwoFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PhaseTwoAreaFolder" (
    "id" TEXT NOT NULL,
    "phaseTwoFolderId" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "PhaseTwoAreaFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaskForce" (
    "id" TEXT NOT NULL,
    "areaFolderId" TEXT NOT NULL,
    "chairPersonId" TEXT NOT NULL,

    CONSTRAINT "TaskForce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaskForceMember" (
    "id" TEXT NOT NULL,
    "taskForceId" TEXT NOT NULL,
    "parameterFolderId" TEXT NOT NULL,

    CONSTRAINT "TaskForceMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AreaFile" (
    "id" TEXT NOT NULL,
    "phaseOneAreaFolderId" TEXT,
    "phaseTwoAreaFolderId" TEXT,
    "type" "public"."AreaFileType" NOT NULL,
    "fileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhaseTwoRequirements_surveyVisitId_key" ON "public"."PhaseTwoRequirements"("surveyVisitId");

-- CreateIndex
CREATE UNIQUE INDEX "PhaseTwoFolder_phaseTwoRequirementsId_key" ON "public"."PhaseTwoFolder"("phaseTwoRequirementsId");

-- CreateIndex
CREATE UNIQUE INDEX "TaskForce_areaFolderId_key" ON "public"."TaskForce"("areaFolderId");

-- CreateIndex
CREATE UNIQUE INDEX "TaskForceMember_parameterFolderId_key" ON "public"."TaskForceMember"("parameterFolderId");

-- AddForeignKey
ALTER TABLE "public"."PhaseTwoRequirements" ADD CONSTRAINT "PhaseTwoRequirements_surveyVisitId_fkey" FOREIGN KEY ("surveyVisitId") REFERENCES "public"."SurveyVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseTwoRequirements" ADD CONSTRAINT "PhaseTwoRequirements_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "public"."Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseTwoFolder" ADD CONSTRAINT "PhaseTwoFolder_phaseTwoRequirementsId_fkey" FOREIGN KEY ("phaseTwoRequirementsId") REFERENCES "public"."PhaseTwoRequirements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseTwoAreaFolder" ADD CONSTRAINT "PhaseTwoAreaFolder_phaseTwoFolderId_fkey" FOREIGN KEY ("phaseTwoFolderId") REFERENCES "public"."PhaseTwoFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseTwoAreaFolder" ADD CONSTRAINT "PhaseTwoAreaFolder_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskForce" ADD CONSTRAINT "TaskForce_areaFolderId_fkey" FOREIGN KEY ("areaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskForce" ADD CONSTRAINT "TaskForce_chairPersonId_fkey" FOREIGN KEY ("chairPersonId") REFERENCES "public"."ProgramPersonnel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskForceMember" ADD CONSTRAINT "TaskForceMember_taskForceId_fkey" FOREIGN KEY ("taskForceId") REFERENCES "public"."TaskForce"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskForceMember" ADD CONSTRAINT "TaskForceMember_parameterFolderId_fkey" FOREIGN KEY ("parameterFolderId") REFERENCES "public"."ParameterFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFile" ADD CONSTRAINT "AreaFile_phaseOneAreaFolderId_fkey" FOREIGN KEY ("phaseOneAreaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFile" ADD CONSTRAINT "AreaFile_phaseTwoAreaFolderId_fkey" FOREIGN KEY ("phaseTwoAreaFolderId") REFERENCES "public"."PhaseTwoAreaFolder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
