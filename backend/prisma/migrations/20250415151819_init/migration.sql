/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fullname` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Station` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `line` VARCHAR(191) NOT NULL,
    `position` INTEGER NOT NULL,
    `fare` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Station_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TravelHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `fromStationId` INTEGER NOT NULL,
    `toStationId` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `traveledAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TravelHistory` ADD CONSTRAINT `TravelHistory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TravelHistory` ADD CONSTRAINT `TravelHistory_fromStationId_fkey` FOREIGN KEY (`fromStationId`) REFERENCES `Station`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TravelHistory` ADD CONSTRAINT `TravelHistory_toStationId_fkey` FOREIGN KEY (`toStationId`) REFERENCES `Station`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
