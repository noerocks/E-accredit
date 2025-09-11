/*
  Warnings:

  - A unique constraint covering the columns `[userId,programId]` on the table `ProgramPersonnel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProgramPersonnel_userId_programId_key" ON "public"."ProgramPersonnel"("userId", "programId");
