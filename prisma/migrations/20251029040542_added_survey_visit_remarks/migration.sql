/*
  Warnings:

  - A unique constraint covering the columns `[name,accreditingBody]` on the table `Instrument` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "surveyVisitId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_name_accreditingBody_key" ON "Instrument"("name", "accreditingBody");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_surveyVisitId_fkey" FOREIGN KEY ("surveyVisitId") REFERENCES "SurveyVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
