-- CreateTable
CREATE TABLE "WorkingHours" (
    "id" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "startMinutes" INTEGER NOT NULL,
    "endMinutes" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "WorkingHours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WorkingHours_weekday_active_idx" ON "WorkingHours"("weekday", "active");

-- CreateIndex
CREATE UNIQUE INDEX "WorkingHours_weekday_startMinutes_key" ON "WorkingHours"("weekday", "startMinutes");
