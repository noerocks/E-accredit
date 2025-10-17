/*
  Warnings:

  - You are about to drop the column `areaFolderId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_areaFolderId_fkey";

-- AlterTable
ALTER TABLE "public"."Comment" DROP COLUMN "areaFolderId",
ADD COLUMN     "recommendedFolderId" TEXT,
ADD COLUMN     "strongFolderId" TEXT,
ADD COLUMN     "weakFolderId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_recommendedFolderId_fkey" FOREIGN KEY ("recommendedFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_strongFolderId_fkey" FOREIGN KEY ("strongFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_weakFolderId_fkey" FOREIGN KEY ("weakFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
