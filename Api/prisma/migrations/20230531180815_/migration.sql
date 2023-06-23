/*
  Warnings:

  - You are about to drop the column `car_model_id` on the `car` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `car` table. All the data in the column will be lost.
  - You are about to drop the `car_model` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `model` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `car` DROP FOREIGN KEY `car_car_model_id_fkey`;

-- AlterTable
ALTER TABLE `car` DROP COLUMN `car_model_id`,
    DROP COLUMN `type`,
    ADD COLUMN `car_type_id` INTEGER NULL,
    ADD COLUMN `model` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `car_model`;

-- CreateTable
CREATE TABLE `car_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imagePath` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_car_type_id_fkey` FOREIGN KEY (`car_type_id`) REFERENCES `car_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
