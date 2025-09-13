/*
  Warnings:

  - A unique constraint covering the columns `[name,accreditingBody]` on the table `Instrument` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accreditingBody` to the `Instrument` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Instrument_name_key";

-- AlterTable
ALTER TABLE "public"."Instrument" ADD COLUMN     "accreditingBody" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_name_accreditingBody_key" ON "public"."Instrument"("name", "accreditingBody");
