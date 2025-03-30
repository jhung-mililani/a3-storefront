-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "comments" TEXT[],
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "reviewCount" INTEGER NOT NULL DEFAULT 0;
