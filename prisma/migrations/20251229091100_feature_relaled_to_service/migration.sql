/*
  Warnings:

  - Added the required column `serviceCategoryId` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "serviceCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_serviceCategoryId_fkey" FOREIGN KEY ("serviceCategoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
