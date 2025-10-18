-- CreateEnum
CREATE TYPE "public"."SurveyStatus" AS ENUM ('PENDING', 'ON_GOING', 'COMPLETE');

-- AlterTable
ALTER TABLE "public"."SurveyVisit" ADD COLUMN     "selfSurveyStatus" "public"."SurveyStatus" NOT NULL DEFAULT 'PENDING';
