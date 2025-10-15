-- CreateTable
CREATE TABLE "public"."Rating" (
    "id" TEXT NOT NULL,
    "evidenceFileId" TEXT NOT NULL,
    "type" "public"."SurveyTeamType" NOT NULL,
    "accreditorId" TEXT NOT NULL,
    "adequacy" INTEGER,
    "effectiveness" INTEGER,
    "finalRate" DECIMAL(10,2),
    "NA" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_evidenceFileId_fkey" FOREIGN KEY ("evidenceFileId") REFERENCES "public"."EvidenceFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_accreditorId_fkey" FOREIGN KEY ("accreditorId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
