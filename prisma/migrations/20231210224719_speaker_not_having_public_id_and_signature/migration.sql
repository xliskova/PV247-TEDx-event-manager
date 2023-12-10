/*
  Warnings:

  - You are about to drop the column `publicId` on the `Speaker` table. All the data in the column will be lost.
  - You are about to drop the column `signature` on the `Speaker` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Speaker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT
);
INSERT INTO "new_Speaker" ("description", "id", "name", "url") SELECT "description", "id", "name", "url" FROM "Speaker";
DROP TABLE "Speaker";
ALTER TABLE "new_Speaker" RENAME TO "Speaker";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
