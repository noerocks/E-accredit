-- DropForeignKey
ALTER TABLE "public"."FileVersion" DROP CONSTRAINT "FileVersion_uploaderId_fkey";

-- AddForeignKey
ALTER TABLE "public"."FileVersion" ADD CONSTRAINT "FileVersion_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
