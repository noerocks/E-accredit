/*
  Warnings:

  - Added the required column `status` to the `EvidenceFile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."EvidenceStatus" AS ENUM ('EMPTY', 'FOR_REVIEW', 'REJECTED', 'ACCEPTED');

-- AlterTable
ALTER TABLE "public"."EvidenceFile" ADD COLUMN     "status" "public"."EvidenceStatus" NOT NULL;
