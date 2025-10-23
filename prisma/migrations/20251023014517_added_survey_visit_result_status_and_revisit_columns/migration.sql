-- CreateEnum
CREATE TYPE "SurveyResultStatus" AS ENUM ('PENDING', 'GRANTED', 'DEFERRED', 'NOT_GRANTED');

-- AlterTable
ALTER TABLE "AreaFolder" ADD COLUMN     "revisit" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SurveyVisit" ADD COLUMN     "surveyResultStatus" "SurveyResultStatus" NOT NULL DEFAULT 'PENDING';
