/*
  Warnings:

  - Added the required column `status` to the `AreaFile` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `EvidenceFile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."FileStatus" AS ENUM ('EMPTY', 'SUBMITTED', 'FOR_REVIEW', 'REJECTED', 'ACCEPTED');

-- AlterTable
ALTER TABLE "public"."AreaFile" ADD COLUMN     "status" "public"."FileStatus" NOT NULL;

-- AlterTable
ALTER TABLE "public"."EvidenceFile" DROP COLUMN "status",
ADD COLUMN     "status" "public"."FileStatus" NOT NULL;

-- DropEnum
DROP TYPE "public"."EvidenceStatus";
