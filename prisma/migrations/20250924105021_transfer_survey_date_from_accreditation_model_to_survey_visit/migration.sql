/*
  Warnings:

  - You are about to drop the column `actualSurveyDate` on the `Accreditation` table. All the data in the column will be lost.
  - Added the required column `actualSurveyDate` to the `SurveyVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Accreditation" DROP COLUMN "actualSurveyDate";

-- AlterTable
ALTER TABLE "public"."SurveyVisit" ADD COLUMN     "actualSurveyDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
