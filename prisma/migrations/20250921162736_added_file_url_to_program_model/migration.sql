/*
  Warnings:

  - The values [ACCREDITOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `folderId` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Role_new" AS ENUM ('ADMIN', 'ACCREDITATION_OFFICER', 'INTERNAL_ACCREDITOR', 'PENDING');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "role" TYPE "public"."Role_new" USING ("role"::text::"public"."Role_new");
ALTER TYPE "public"."Role" RENAME TO "Role_old";
ALTER TYPE "public"."Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "public"."Program" ADD COLUMN     "folderId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."ProgramPosition";

-- CreateTable
CREATE TABLE "public"."Level" (
    "id" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "requiredGrandMean" DECIMAL(65,30) NOT NULL,
    "requiredAreaMean" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);
