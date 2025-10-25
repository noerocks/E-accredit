/*
  Warnings:

  - A unique constraint covering the columns `[surveyVisitId]` on the table `FileVersion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FileVersion" ADD COLUMN     "surveyVisitId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "FileVersion_surveyVisitId_key" ON "FileVersion"("surveyVisitId");

-- AddForeignKey
ALTER TABLE "FileVersion" ADD CONSTRAINT "FileVersion_surveyVisitId_fkey" FOREIGN KEY ("surveyVisitId") REFERENCES "SurveyVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
