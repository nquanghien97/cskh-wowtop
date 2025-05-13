-- CreateTable
CREATE TABLE `answer_customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `symptomCode` VARCHAR(191) NOT NULL,
    `symptom` VARCHAR(191) NOT NULL,
    `staffMessages` VARCHAR(191) NOT NULL,
    `customerMessages` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `extraProducts` LONGTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
