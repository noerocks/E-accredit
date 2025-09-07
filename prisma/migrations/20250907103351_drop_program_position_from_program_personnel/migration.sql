/*
  Warnings:

  - You are about to drop the column `position` on the `ProgramPersonnel` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."ProgramPersonnel_userId_programId_position_key";

-- AlterTable
ALTER TABLE "public"."ProgramPersonnel" DROP COLUMN "position";
