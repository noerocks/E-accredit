-- AlterTable
ALTER TABLE "public"."Comment" ADD COLUMN     "areaFileId" TEXT,
ADD COLUMN     "evidenceFileId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_evidenceFileId_fkey" FOREIGN KEY ("evidenceFileId") REFERENCES "public"."EvidenceFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_areaFileId_fkey" FOREIGN KEY ("areaFileId") REFERENCES "public"."AreaFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
