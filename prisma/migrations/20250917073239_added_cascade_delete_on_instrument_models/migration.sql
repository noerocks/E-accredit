-- DropForeignKey
ALTER TABLE "public"."Area" DROP CONSTRAINT "Area_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Indicator" DROP CONSTRAINT "Indicator_parameterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Parameter" DROP CONSTRAINT "Parameter_areaId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Area" ADD CONSTRAINT "Area_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "public"."Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Parameter" ADD CONSTRAINT "Parameter_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Indicator" ADD CONSTRAINT "Indicator_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "public"."Parameter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
