/*
  Warnings:

  - A unique constraint covering the columns `[phaseTwoAreaFolderId]` on the table `TaskForce` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TaskForce" ADD COLUMN     "phaseTwoAreaFolderId" TEXT,
ALTER COLUMN "areaFolderId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TaskForce_phaseTwoAreaFolderId_key" ON "TaskForce"("phaseTwoAreaFolderId");

-- AddForeignKey
ALTER TABLE "TaskForce" ADD CONSTRAINT "TaskForce_phaseTwoAreaFolderId_fkey" FOREIGN KEY ("phaseTwoAreaFolderId") REFERENCES "PhaseTwoAreaFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
