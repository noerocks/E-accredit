/*
  Warnings:

  - Added the required column `name` to the `EvidenceVersions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."AreaFile" DROP CONSTRAINT "AreaFile_phaseOneAreaFolderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AreaFile" DROP CONSTRAINT "AreaFile_phaseTwoAreaFolderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EvidenceVersions" DROP CONSTRAINT "EvidenceVersions_evidenceFileId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TaskForceMember" DROP CONSTRAINT "TaskForceMember_programPersonnelId_fkey";

-- AlterTable
ALTER TABLE "public"."EvidenceVersions" ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."EvidenceVersions" ADD CONSTRAINT "EvidenceVersions_evidenceFileId_fkey" FOREIGN KEY ("evidenceFileId") REFERENCES "public"."EvidenceFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFile" ADD CONSTRAINT "AreaFile_phaseOneAreaFolderId_fkey" FOREIGN KEY ("phaseOneAreaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFile" ADD CONSTRAINT "AreaFile_phaseTwoAreaFolderId_fkey" FOREIGN KEY ("phaseTwoAreaFolderId") REFERENCES "public"."PhaseTwoAreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskForceMember" ADD CONSTRAINT "TaskForceMember_programPersonnelId_fkey" FOREIGN KEY ("programPersonnelId") REFERENCES "public"."ProgramPersonnel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
