/*
  Warnings:

  - Added the required column `status` to the `EvidenceVersions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."FileVersionStatus" AS ENUM ('ACTIVE', 'ARCHIVED');

-- AlterTable
ALTER TABLE "public"."EvidenceVersions" ADD COLUMN     "status" "public"."FileVersionStatus" NOT NULL;
