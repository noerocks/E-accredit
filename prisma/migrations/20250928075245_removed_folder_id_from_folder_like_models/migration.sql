/*
  Warnings:

  - You are about to drop the column `fileId` on the `AreaFile` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `AreaFolder` table. All the data in the column will be lost.
  - You are about to drop the column `fileId` on the `EvidenceFile` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `IndicatorFolder` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `InstrumentFolder` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `ParameterFolder` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `PhaseTwoAreaFolder` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `PhaseTwoFolder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."AreaFile" DROP COLUMN "fileId",
ADD COLUMN     "objectURL" TEXT;

-- AlterTable
ALTER TABLE "public"."AreaFolder" DROP COLUMN "folderId";

-- AlterTable
ALTER TABLE "public"."EvidenceFile" DROP COLUMN "fileId",
ADD COLUMN     "ObjectURL" TEXT;

-- AlterTable
ALTER TABLE "public"."IndicatorFolder" DROP COLUMN "folderId";

-- AlterTable
ALTER TABLE "public"."InstrumentFolder" DROP COLUMN "folderId";

-- AlterTable
ALTER TABLE "public"."ParameterFolder" DROP COLUMN "folderId";

-- AlterTable
ALTER TABLE "public"."PhaseTwoAreaFolder" DROP COLUMN "folderId";

-- AlterTable
ALTER TABLE "public"."PhaseTwoFolder" DROP COLUMN "folderId";
