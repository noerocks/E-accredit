/*
  Warnings:

  - Added the required column `programPersonnelId` to the `TaskForceMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."TaskForceMember" ADD COLUMN     "programPersonnelId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."TaskForceMember" ADD CONSTRAINT "TaskForceMember_programPersonnelId_fkey" FOREIGN KEY ("programPersonnelId") REFERENCES "public"."ProgramPersonnel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
