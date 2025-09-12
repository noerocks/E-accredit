-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('SYSTEM', 'IMPLEMENTATION', 'OUTCOME');

-- CreateTable
CREATE TABLE "public"."Instrument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Area" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Parameter" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "Parameter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Indicator" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "public"."Category" NOT NULL,
    "evidence" TEXT NOT NULL,
    "parameterId" INTEGER NOT NULL,

    CONSTRAINT "Indicator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Area" ADD CONSTRAINT "Area_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "public"."Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Parameter" ADD CONSTRAINT "Parameter_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Indicator" ADD CONSTRAINT "Indicator_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "public"."Parameter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
