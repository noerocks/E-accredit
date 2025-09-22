-- CreateEnum
CREATE TYPE "public"."Phase" AS ENUM ('PHASE_1', 'PHASE_2');

-- CreateTable
CREATE TABLE "public"."Accreditation" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "currentLevel" TEXT,
    "phase" "public"."Phase",

    CONSTRAINT "Accreditation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SurveyVisit" (
    "id" TEXT NOT NULL,
    "accreditationId" TEXT NOT NULL,
    "targetLevel" TEXT NOT NULL,
    "targetPhase" "public"."Phase",

    CONSTRAINT "SurveyVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PhaseOneRequirements" (
    "id" TEXT NOT NULL,
    "surveyVisitId" TEXT NOT NULL,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "PhaseOneRequirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InstrumentFolder" (
    "id" TEXT NOT NULL,
    "phaseOneRequirementsId" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,

    CONSTRAINT "InstrumentFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AreaFolder" (
    "id" TEXT NOT NULL,
    "instrumentFolderId" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "AreaFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ParameterFolder" (
    "id" TEXT NOT NULL,
    "areaFolderId" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "parameterId" INTEGER NOT NULL,

    CONSTRAINT "ParameterFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."IndicatorFolder" (
    "id" TEXT NOT NULL,
    "parameterFolderId" TEXT NOT NULL,
    "category" "public"."Category" NOT NULL,

    CONSTRAINT "IndicatorFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EvidenceFile" (
    "id" TEXT NOT NULL,
    "indicatorFolderId" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "indicatorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EvidenceFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accreditation_programId_key" ON "public"."Accreditation"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "PhaseOneRequirements_surveyVisitId_key" ON "public"."PhaseOneRequirements"("surveyVisitId");

-- CreateIndex
CREATE UNIQUE INDEX "InstrumentFolder_phaseOneRequirementsId_key" ON "public"."InstrumentFolder"("phaseOneRequirementsId");

-- AddForeignKey
ALTER TABLE "public"."Accreditation" ADD CONSTRAINT "Accreditation_programId_fkey" FOREIGN KEY ("programId") REFERENCES "public"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accreditation" ADD CONSTRAINT "Accreditation_currentLevel_fkey" FOREIGN KEY ("currentLevel") REFERENCES "public"."Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SurveyVisit" ADD CONSTRAINT "SurveyVisit_accreditationId_fkey" FOREIGN KEY ("accreditationId") REFERENCES "public"."Accreditation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SurveyVisit" ADD CONSTRAINT "SurveyVisit_targetLevel_fkey" FOREIGN KEY ("targetLevel") REFERENCES "public"."Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseOneRequirements" ADD CONSTRAINT "PhaseOneRequirements_surveyVisitId_fkey" FOREIGN KEY ("surveyVisitId") REFERENCES "public"."SurveyVisit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseOneRequirements" ADD CONSTRAINT "PhaseOneRequirements_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "public"."Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InstrumentFolder" ADD CONSTRAINT "InstrumentFolder_phaseOneRequirementsId_fkey" FOREIGN KEY ("phaseOneRequirementsId") REFERENCES "public"."PhaseOneRequirements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFolder" ADD CONSTRAINT "AreaFolder_instrumentFolderId_fkey" FOREIGN KEY ("instrumentFolderId") REFERENCES "public"."InstrumentFolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFolder" ADD CONSTRAINT "AreaFolder_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParameterFolder" ADD CONSTRAINT "ParameterFolder_areaFolderId_fkey" FOREIGN KEY ("areaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParameterFolder" ADD CONSTRAINT "ParameterFolder_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "public"."Parameter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."IndicatorFolder" ADD CONSTRAINT "IndicatorFolder_parameterFolderId_fkey" FOREIGN KEY ("parameterFolderId") REFERENCES "public"."ParameterFolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EvidenceFile" ADD CONSTRAINT "EvidenceFile_indicatorFolderId_fkey" FOREIGN KEY ("indicatorFolderId") REFERENCES "public"."IndicatorFolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EvidenceFile" ADD CONSTRAINT "EvidenceFile_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "public"."Indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
