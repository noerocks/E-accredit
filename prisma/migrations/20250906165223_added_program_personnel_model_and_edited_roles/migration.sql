/*
  Warnings:

  - The values [CHAIRPERSON,MEMBER,INTERNAL,EXTERNAL] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."ProgramPosition" AS ENUM ('CHAIRPERSON', 'MEMBER');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Role_new" AS ENUM ('ADMIN', 'ACCREDITATION_OFFICER', 'ACCREDITOR', 'PENDING');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "role" TYPE "public"."Role_new" USING ("role"::text::"public"."Role_new");
ALTER TYPE "public"."Role" RENAME TO "Role_old";
ALTER TYPE "public"."Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'PENDING';
COMMIT;

-- CreateTable
CREATE TABLE "public"."ProgramPersonnel" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "position" "public"."ProgramPosition" NOT NULL,

    CONSTRAINT "ProgramPersonnel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramPersonnel_userId_programId_position_key" ON "public"."ProgramPersonnel"("userId", "programId", "position");

-- AddForeignKey
ALTER TABLE "public"."ProgramPersonnel" ADD CONSTRAINT "ProgramPersonnel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProgramPersonnel" ADD CONSTRAINT "ProgramPersonnel_programId_fkey" FOREIGN KEY ("programId") REFERENCES "public"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
