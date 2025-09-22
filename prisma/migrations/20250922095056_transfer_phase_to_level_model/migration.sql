/*
  Warnings:

  - You are about to drop the column `targetPhase` on the `SurveyVisit` table. All the data in the column will be lost.
  - Added the required column `phase` to the `Level` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Level" ADD COLUMN     "phase" "public"."Phase" NOT NULL;

-- AlterTable
ALTER TABLE "public"."SurveyVisit" DROP COLUMN "targetPhase";
