/*
  Warnings:

  - You are about to drop the column `complete` on the `AreaFolder` table. All the data in the column will be lost.
  - Added the required column `status` to the `AreaFolder` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `SurveyVisit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Progress" AS ENUM ('IN_PROGRESS', 'COMPLETE');

-- AlterTable
ALTER TABLE "public"."AreaFolder" DROP COLUMN "complete",
ADD COLUMN     "status" "public"."Progress" NOT NULL;

-- AlterTable
ALTER TABLE "public"."SurveyVisit" DROP COLUMN "status",
ADD COLUMN     "status" "public"."Progress" NOT NULL;

-- DropEnum
DROP TYPE "public"."SurveyStatus";
