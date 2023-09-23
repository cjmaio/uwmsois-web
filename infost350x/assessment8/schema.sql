-- SQL script to setup the database used

-- Create account type table with data the application expects
CREATE TABLE IF NOT EXISTS `account_type` (
  `account_type_id` bigint NOT NULL AUTO_INCREMENT,
  `account_type_name` varchar(100) NOT NULL,
  PRIMARY KEY (`account_type_id`)
);

INSERT INTO `account_type` (`account_type_id`, `account_type_name`) VALUES
(1,	'CREDIT_CARD'),
(2,	'LINE_OF_CREDIT');

-- Create card type table with data the application expects
CREATE TABLE IF NOT EXISTS `card_type` (
  `card_type_id` bigint NOT NULL AUTO_INCREMENT,
  `card_type_name` varchar(100) NOT NULL,
  PRIMARY KEY (`card_type_id`)
);

INSERT INTO `card_type` (`card_type_id`, `card_type_name`) VALUES
(1,	'VISA'),
(2,	'MASTERCARD'),
(3,	'AMERICAN_EXPRESS'),
(4,	'DISCOVER'),
(5,	'STORE');

-- Create account table
CREATE TABLE IF NOT EXISTS `account` (
  `account_id` varchar(36) NOT NULL,
  `account_type_id` bigint NOT NULL,
  `account_name` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_updated_at` timestamp NOT NULL,
  `balance` double NOT NULL,
  `credit_limit` double NOT NULL,
  `interest_rate` double NOT NULL,
  `active_promotions` text,
  `annual_fee` double NOT NULL,
  `rewards` text,
  `card_type_id` bigint DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  KEY `account_type_id` (`account_type_id`),
  KEY `card_type_id` (`card_type_id`),
  CONSTRAINT `account_ibfk_1` FOREIGN KEY (`account_type_id`) REFERENCES `account_type` (`account_type_id`),
  CONSTRAINT `account_ibfk_2` FOREIGN KEY (`card_type_id`) REFERENCES `card_type` (`card_type_id`)
);
