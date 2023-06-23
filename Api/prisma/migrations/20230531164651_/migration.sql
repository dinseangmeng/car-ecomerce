/*
  Warnings:

  - You are about to drop the column `model` on the `car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `car` DROP COLUMN `model`,
    ADD COLUMN `car_model_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `car_model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_car_model_id_fkey` FOREIGN KEY (`car_model_id`) REFERENCES `car_model`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
