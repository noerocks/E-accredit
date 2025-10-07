/*
  Warnings:

  - You are about to drop the column `parameterFolderId` on the `TaskForceMember` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."TaskForceMember" DROP CONSTRAINT "TaskForceMember_parameterFolderId_fkey";

-- DropIndex
DROP INDEX "public"."TaskForceMember_parameterFolderId_key";

-- AlterTable
ALTER TABLE "public"."TaskForceMember" DROP COLUMN "parameterFolderId";
