-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `src` VARCHAR(191) NOT NULL,
    `likes` INTEGER NOT NULL,
    `orientation` VARCHAR(191) NOT NULL DEFAULT 'Landscape',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
