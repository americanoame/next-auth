-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "holes" INTEGER NOT NULL,
    "par" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hole" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "par" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Hole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Round" (
    "id" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "courseId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stroke" (
    "id" TEXT NOT NULL,
    "holeId" TEXT NOT NULL,
    "roundId" TEXT NOT NULL,
    "strokes" INTEGER NOT NULL,

    CONSTRAINT "Stroke_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hole_courseId_number_key" ON "Hole"("courseId", "number");

-- CreateIndex
CREATE INDEX "round_user_idx" ON "Round"("userId");

-- CreateIndex
CREATE INDEX "round_course_idx" ON "Round"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Stroke_holeId_roundId_key" ON "Stroke"("holeId", "roundId");

-- AddForeignKey
ALTER TABLE "Hole" ADD CONSTRAINT "Hole_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stroke" ADD CONSTRAINT "Stroke_holeId_fkey" FOREIGN KEY ("holeId") REFERENCES "Hole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stroke" ADD CONSTRAINT "Stroke_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE CASCADE ON UPDATE CASCADE;
