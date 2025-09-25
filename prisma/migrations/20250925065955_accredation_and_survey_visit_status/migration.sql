-- CreateEnum
CREATE TYPE "public"."AccreditationStatus" AS ENUM ('UNACCREDITED', 'ACTIVE', 'EXPIRED');

-- AlterTable
ALTER TABLE "public"."Accreditation" ADD COLUMN     "endsAt" TIMESTAMP(3),
ADD COLUMN     "startsAt" TIMESTAMP(3),
ADD COLUMN     "status" "public"."AccreditationStatus" NOT NULL DEFAULT 'UNACCREDITED';
