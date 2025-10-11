-- AlterTable
ALTER TABLE "public"."FileVersion" ADD COLUMN     "uploaderId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."FileVersion" ADD CONSTRAINT "FileVersion_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "public"."ProgramPersonnel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
