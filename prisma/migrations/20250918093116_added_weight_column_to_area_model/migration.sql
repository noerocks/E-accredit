/*
  Warnings:

  - Added the required column `weight` to the `Area` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Area" ADD COLUMN     "weight" INTEGER NOT NULL;
