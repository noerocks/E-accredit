/*
  Warnings:

  - Changed the type of `label` on the `Level` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."LevelEnum" AS ENUM ('PRELIMINARY_SURVEY_VISIT', 'LEVEL_I', 'LEVEL_II', 'LEVEL_III_PHASE_1', 'LEVEL_III_PHASE_2', 'LEVEL_IV_PHASE_1', 'LEVEL_IV_PHASE_2');

-- AlterTable
ALTER TABLE "public"."Level" DROP COLUMN "label",
ADD COLUMN     "label" "public"."LevelEnum" NOT NULL;
