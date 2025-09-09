/*
  Warnings:

  - You are about to alter the column `rating` on the `Filme` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

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
    "rating" REAL NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Filme" ("createdAt", "director", "duration", "genre", "id", "rating", "releaseYear", "synopsis", "title", "updatedAt") SELECT "createdAt", "director", "duration", "genre", "id", "rating", "releaseYear", "synopsis", "title", "updatedAt" FROM "Filme";
DROP TABLE "Filme";
ALTER TABLE "new_Filme" RENAME TO "Filme";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
