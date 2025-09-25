/*
  Warnings:

  - Changed the type of `status` on the `SurveyVisit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."SurveyStatus" AS ENUM ('IN_PROGRESS', 'COMPLETE');

-- AlterTable
ALTER TABLE "public"."SurveyVisit" DROP COLUMN "status",
ADD COLUMN     "status" "public"."SurveyStatus" NOT NULL;

-- DropEnum
DROP TYPE "public"."AccreditationStatus";
