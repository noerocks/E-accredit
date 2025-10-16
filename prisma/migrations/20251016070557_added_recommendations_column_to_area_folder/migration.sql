-- AlterTable
ALTER TABLE "public"."Comment" ADD COLUMN     "areaFolderId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_areaFolderId_fkey" FOREIGN KEY ("areaFolderId") REFERENCES "public"."AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
