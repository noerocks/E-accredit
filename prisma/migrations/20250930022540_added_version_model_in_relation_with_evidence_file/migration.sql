/*
  Warnings:

  - You are about to drop the column `ObjectURL` on the `EvidenceFile` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."EvidenceFileType" AS ENUM ('DOCUMENT', 'PDF', 'PRESENTATION', 'SPREADSHEET', 'IMAGE');

-- AlterTable
ALTER TABLE "public"."EvidenceFile" DROP COLUMN "ObjectURL";

-- CreateTable
CREATE TABLE "public"."EvidenceVersions" (
    "id" TEXT NOT NULL,
    "evidenceFileId" TEXT NOT NULL,
    "objectUrl" TEXT NOT NULL,
    "type" "public"."EvidenceFileType" NOT NULL,

    CONSTRAINT "EvidenceVersions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."EvidenceVersions" ADD CONSTRAINT "EvidenceVersions_evidenceFileId_fkey" FOREIGN KEY ("evidenceFileId") REFERENCES "public"."EvidenceFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
