CREATE DATABASE IF NOT EXISTS `acessos_api`;

USE `acessos_api`;

CREATE TABLE `acessos_api` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(255) NOT NULL,
  `access_time` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;