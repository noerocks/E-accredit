/*
  Warnings:

  - You are about to drop the column `uploaderId` on the `FileVersion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."FileVersion" DROP CONSTRAINT "FileVersion_uploaderId_fkey";

-- AlterTable
ALTER TABLE "public"."FileVersion" DROP COLUMN "uploaderId",
ADD COLUMN     "uploaderEmail" TEXT;

-- AddForeignKey
ALTER TABLE "public"."FileVersion" ADD CONSTRAINT "FileVersion_uploaderEmail_fkey" FOREIGN KEY ("uploaderEmail") REFERENCES "public"."User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
