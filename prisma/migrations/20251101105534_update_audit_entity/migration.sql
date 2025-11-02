/*
  Warnings:

  - The values [SURVEY] on the enum `AuditEntity` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuditEntity_new" AS ENUM ('PORTFOLIO', 'SELF_SURVEY', 'ACTUAL_SURVEY', 'SYSTEM');
ALTER TABLE "AuditTrail" ALTER COLUMN "entity" TYPE "AuditEntity_new" USING ("entity"::text::"AuditEntity_new");
ALTER TYPE "AuditEntity" RENAME TO "AuditEntity_old";
ALTER TYPE "AuditEntity_new" RENAME TO "AuditEntity";
DROP TYPE "public"."AuditEntity_old";
COMMIT;
