/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sales" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);
