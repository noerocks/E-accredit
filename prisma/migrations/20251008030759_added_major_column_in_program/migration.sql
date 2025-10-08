/*
  Warnings:

  - Added the required column `status` to the `ParameterFolder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ParameterFolder" ADD COLUMN     "status" "public"."Progress" NOT NULL;

-- AlterTable
ALTER TABLE "public"."Program" ADD COLUMN     "major" TEXT;
