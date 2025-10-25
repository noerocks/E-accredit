/*
  Warnings:

  - You are about to alter the column `requiredGrandMean` on the `Level` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `requiredAreaMean` on the `Level` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `finalRate` on the `Rating` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Level" ALTER COLUMN "requiredGrandMean" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "requiredAreaMean" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "finalRate" SET DATA TYPE DOUBLE PRECISION;
