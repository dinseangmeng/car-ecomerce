/*
  Warnings:

  - Added the required column `imagePath` to the `car_model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `car_model` ADD COLUMN `imagePath` VARCHAR(191) NOT NULL;
