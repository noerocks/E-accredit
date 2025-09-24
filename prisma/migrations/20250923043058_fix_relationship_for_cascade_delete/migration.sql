-- AlterTable
ALTER TABLE "public"."InstrumentFolder" ALTER COLUMN "phaseOneRequirementsId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."PhaseOneRequirements" ALTER COLUMN "surveyVisitId" DROP NOT NULL;
