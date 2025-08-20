/*
  Warnings:

  - You are about to drop the column `trainerId` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the `PokemonTrainer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `height` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Pokemon" DROP CONSTRAINT "Pokemon_trainerId_fkey";

-- AlterTable
ALTER TABLE "public"."Pokemon" DROP COLUMN "trainerId",
ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "public"."PokemonTrainer";

-- CreateIndex
CREATE INDEX "Pokemon_name_idx" ON "public"."Pokemon"("name");

-- CreateIndex
CREATE INDEX "Pokemon_type_idx" ON "public"."Pokemon"("type");
