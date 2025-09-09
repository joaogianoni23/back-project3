/*
  Warnings:

  - You are about to alter the column `rating` on the `Filme` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Made the column `duration` on table `Filme` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Filme` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Filme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "synopsis" TEXT,
    "genre" TEXT,
    "duration" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Filme" ("createdAt", "director", "duration", "genre", "id", "rating", "releaseYear", "synopsis", "title", "updatedAt") SELECT "createdAt", "director", "duration", "genre", "id", "rating", "releaseYear", "synopsis", "title", "updatedAt" FROM "Filme";
DROP TABLE "Filme";
ALTER TABLE "new_Filme" RENAME TO "Filme";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
