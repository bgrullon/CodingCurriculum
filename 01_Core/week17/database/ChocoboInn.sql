DROP DATABASE IF EXISTS Chocobo_Inn;
CREATE DATABASE Chocobo_Inn;
USE Chocobo_Inn;

CREATE TABLE IF NOT EXISTS Cards 
	(
		Card_id BIGINT NOT NULL AUTO_INCREMENT,
		Cost INT,
		Cardname VARCHAR(20),
		Cardtype VARCHAR(20),
		Element VARCHAR(20),
        Rarity VARCHAR(20),
        Cardset VARCHAR(20),
		Code VARCHAR(10) NOT NULL,
		Price DECIMAL(6,2) NOT NULL,
		Featured BOOLEAN,
		Outofstock BOOLEAN,
		PRIMARY KEY(Card_id),
		CONSTRAINT UNIQUE KEY(Code)
	);

CREATE TABLE IF NOT EXISTS Customer
	(
		Customer_id BIGINT NOT NULL AUTO_INCREMENT,
		FirstName VARCHAR(50),
		LastName VARCHAR(50),
        Customer_Address VARCHAR(255),
        Country CHAR(3),
		Phone VARCHAR(20),
		Email VARCHAR(255),
		PRIMARY KEY(Customer_id)
	);

CREATE TABLE IF NOT EXISTS Orders
	(
		Order_id BIGINT NOT NULL AUTO_INCREMENT,
		Customer_id BIGINT,
		OrderDate TIMESTAMP,
		ShippedDate TIMESTAMP,
		ShippedName VARCHAR(50),
		ShippedAddress VARCHAR(255),
		ShippedCountry CHAR(3),
		EstDeliveryDate DATE,
		ShipVia VARCHAR(255),
		PRIMARY KEY(Order_id),
		FOREIGN KEY(Customer_id)
			REFERENCES Customer(Customer_id)
			ON DELETE CASCADE
	);

CREATE TABLE IF NOT EXISTS Order_detail
	(
		Card_id BIGINT,
		Order_id BIGINT,
		Quantity INT,
		Order_total DECIMAL(6,2) NOT NULL,
		FOREIGN KEY(Card_id)
			REFERENCES Cards(Card_id)
			ON DELETE CASCADE,
		FOREIGN KEY(Order_id)
			REFERENCES Orders(Order_id)
			ON DELETE CASCADE
	);


INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Warrior of Light", "Forward", "Fire", "Rare", "Opus I", "1-005R", 15, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Squall", "Forward", "Ice", "Legend", "Opus I", "1-041L", 9, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Terra", "Forward", "Ice", "Rare", "Opus I", "1-047R", 9, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Aerith", "Backup", "Wind", "Rare", "Opus I", "1-064R", 11, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Y'shtola", "Forward", "Wind", "Hero", "Opus I", "1-084H", 16, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Kimahri", "Forward", "Earth", "Hero", "Opus I", "1-102H", 5, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Hecatoncheir", "Summon", "Earth", "Rare", "Opus I", "1-117R", 22, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Cait Sith", "Forward", "Lightning", "Rare", "Opus I", "1-131R", 4, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Lulu", "Backup", "Lightning", "Hero", "Opus I", "1-149H", 8, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Cloud", "Forward", "Light", "Legend", "Opus I", "1-182L", 14, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Valefor", "Summon", "Wind", "Starter", "Opus I", "1-198S", 7.5, false, false);

INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price, Featured, Outofstock)
	VALUES (2, "Vincent", "Forward", "Earth", "Legend", "Opus II", "2-077L", 13.5, false, false);