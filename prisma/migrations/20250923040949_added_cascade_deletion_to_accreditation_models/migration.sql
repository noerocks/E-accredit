-- DropForeignKey
ALTER TABLE "public"."Accreditation" DROP CONSTRAINT "Accreditation_currentLevel_fkey";

-- DropForeignKey
ALTER TABLE "public"."Accreditation" DROP CONSTRAINT "Accreditation_programId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AreaFolder" DROP CONSTRAINT "AreaFolder_areaId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AreaFolder" DROP CONSTRAINT "AreaFolder_instrumentFolderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EvidenceFile" DROP CONSTRAINT "EvidenceFile_indicatorFolderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EvidenceFile" DROP CONSTRAINT "EvidenceFile_indicatorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."IndicatorFolder" DROP CONSTRAINT "IndicatorFolder_parameterFolderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."InstrumentFolder" DROP CONSTRAINT "InstrumentFolder_phaseOneRequirementsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ParameterFolder" DROP CONSTRAINT "ParameterFolder_areaFolderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ParameterFolder" DROP CONSTRAINT "ParameterFolder_parameterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PhaseOneRequirements" DROP CONSTRAINT "PhaseOneRequirements_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PhaseOneRequirements" DROP CONSTRAINT "PhaseOneRequirements_surveyVisitId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProgramPersonnel" DROP CONSTRAINT "ProgramPersonnel_programId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProgramPersonnel" DROP CONSTRAINT "ProgramPersonnel_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SurveyVisit" DROP CONSTRAINT "SurveyVisit_accreditationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SurveyVisit" DROP CONSTRAINT "SurveyVisit_targetLevel_fkey";

-- AddForeignKey
ALTER TABLE "public"."ProgramPersonnel" ADD CONSTRAINT "ProgramPersonnel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProgramPersonnel" ADD CONSTRAINT "ProgramPersonnel_programId_fkey" FOREIGN KEY ("programId") REFERENCES "public"."Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accreditation" ADD CONSTRAINT "Accreditation_programId_fkey" FOREIGN KEY ("programId") REFERENCES "public"."Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accreditation" ADD CONSTRAINT "Accreditation_currentLevel_fkey" FOREIGN KEY ("currentLevel") REFERENCES "public"."Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SurveyVisit" ADD CONSTRAINT "SurveyVisit_accreditationId_fkey" FOREIGN KEY ("accreditationId") REFERENCES "public"."Accreditation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SurveyVisit" ADD CONSTRAINT "SurveyVisit_targetLevel_fkey" FOREIGN KEY ("targetLevel") REFERENCES "public"."Level"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseOneRequirements" ADD CONSTRAINT "PhaseOneRequirements_surveyVisitId_fkey" FOREIGN KEY ("surveyVisitId") REFERENCES "public"."SurveyVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PhaseOneRequirements" ADD CONSTRAINT "PhaseOneRequirements_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "public"."Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InstrumentFolder" ADD CONSTRAINT "InstrumentFolder_phaseOneRequirementsId_fkey" FOREIGN KEY ("phaseOneRequirementsId") REFERENCES "public"."PhaseOneRequirements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFolder" ADD CONSTRAINT "AreaFolder_instrumentFolderId_fkey" FOREIGN KEY ("instrumentFolderId") REFERENCES "public"."InstrumentFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaFolder" ADD CONSTRAINT "AreaFolder_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParameterFolder" ADD CONSTRAINT "ParameterFolder_areaFolderId_fkey" FOREIGN KEY ("areaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParameterFolder" ADD CONSTRAINT "ParameterFolder_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "public"."Parameter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."IndicatorFolder" ADD CONSTRAINT "IndicatorFolder_parameterFolderId_fkey" FOREIGN KEY ("parameterFolderId") REFERENCES "public"."ParameterFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EvidenceFile" ADD CONSTRAINT "EvidenceFile_indicatorFolderId_fkey" FOREIGN KEY ("indicatorFolderId") REFERENCES "public"."IndicatorFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EvidenceFile" ADD CONSTRAINT "EvidenceFile_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "public"."Indicator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
