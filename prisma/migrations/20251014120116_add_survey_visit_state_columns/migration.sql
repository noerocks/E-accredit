-- AlterTable
ALTER TABLE "public"."SurveyVisit" ADD COLUMN     "allowEdits" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "allowFileUploads" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "openForActualSurvey" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "openForSelfSurvey" BOOLEAN NOT NULL DEFAULT false;
