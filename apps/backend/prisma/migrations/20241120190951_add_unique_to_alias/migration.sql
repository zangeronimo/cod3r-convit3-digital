/*
  Warnings:

  - A unique constraint covering the columns `[alias]` on the table `events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "events_alias_key" ON "events"("alias");
