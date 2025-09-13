/*
  Warnings:

  - Added the required column `description` to the `Area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Parameter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Area" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Parameter" ADD COLUMN     "description" TEXT NOT NULL;
