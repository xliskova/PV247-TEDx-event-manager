/*
  Warnings:

  - You are about to drop the column `eventId` on the `Tag` table. All the data in the column will be lost.
  - Made the column `image` on table `Speaker` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Speaker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" BLOB NOT NULL
);
INSERT INTO "new_Speaker" ("description", "id", "image", "name") SELECT "description", "id", "image", "name" FROM "Speaker";
DROP TABLE "Speaker";
ALTER TABLE "new_Speaker" RENAME TO "Speaker";
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
INSERT INTO "new_Tag" ("color", "id", "title") SELECT "color", "id", "title" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
