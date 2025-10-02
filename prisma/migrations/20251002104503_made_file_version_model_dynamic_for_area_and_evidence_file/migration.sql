/*
  Warnings:

  - You are about to drop the column `objectURL` on the `AreaFile` table. All the data in the column will be lost.
  - You are about to drop the `EvidenceVersions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."EvidenceVersions" DROP CONSTRAINT "EvidenceVersions_evidenceFileId_fkey";

-- AlterTable
ALTER TABLE "public"."AreaFile" DROP COLUMN "objectURL";

-- DropTable
DROP TABLE "public"."EvidenceVersions";

-- CreateTable
CREATE TABLE "public"."FileVersion" (
    "id" TEXT NOT NULL,
    "evidenceFileId" TEXT,
    "areaFileId" TEXT,
    "name" TEXT NOT NULL,
    "status" "public"."FileVersionStatus",
    "objectUrl" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FileVersion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."FileVersion" ADD CONSTRAINT "FileVersion_evidenceFileId_fkey" FOREIGN KEY ("evidenceFileId") REFERENCES "public"."EvidenceFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FileVersion" ADD CONSTRAINT "FileVersion_areaFileId_fkey" FOREIGN KEY ("areaFileId") REFERENCES "public"."AreaFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
