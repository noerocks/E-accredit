/*
  Warnings:

  - The values [LEVEL_III_PHASE_1,LEVEL_III_PHASE_2,LEVEL_IV_PHASE_1,LEVEL_IV_PHASE_2] on the enum `LevelEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."LevelEnum_new" AS ENUM ('PRELIMINARY_SURVEY_VISIT', 'LEVEL_I', 'LEVEL_II', 'LEVEL_III', 'LEVEL_IV');
ALTER TABLE "public"."Level" ALTER COLUMN "label" TYPE "public"."LevelEnum_new" USING ("label"::text::"public"."LevelEnum_new");
ALTER TYPE "public"."LevelEnum" RENAME TO "LevelEnum_old";
ALTER TYPE "public"."LevelEnum_new" RENAME TO "LevelEnum";
DROP TYPE "public"."LevelEnum_old";
COMMIT;
