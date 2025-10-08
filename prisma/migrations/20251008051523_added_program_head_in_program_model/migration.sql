-- AlterTable
ALTER TABLE "public"."Program" ADD COLUMN     "programHeadId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Program" ADD CONSTRAINT "Program_programHeadId_fkey" FOREIGN KEY ("programHeadId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
