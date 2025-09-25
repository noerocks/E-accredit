/*
  Warnings:

  - Added the required column `yearsEffective` to the `Level` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Level" ADD COLUMN     "yearsEffective" INTEGER NOT NULL;
