-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "improvementFolderId" TEXT;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_improvementFolderId_fkey" FOREIGN KEY ("improvementFolderId") REFERENCES "AreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
