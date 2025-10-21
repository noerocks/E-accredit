-- AlterTable
ALTER TABLE "public"."SurveyVisit" ADD COLUMN     "actualSurveyEndedAt" TIMESTAMP(3),
ADD COLUMN     "actualSurveyStartedAt" TIMESTAMP(3),
ADD COLUMN     "actualSurveyStatus" "public"."SurveyStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "selfSurveyEndedAt" TIMESTAMP(3),
ADD COLUMN     "selfSurveyStartedAt" TIMESTAMP(3);
