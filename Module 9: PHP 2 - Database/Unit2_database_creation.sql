-- Selecting the database
use lsherburne;




-- Drop existing tables
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;




-- Create the tables
CREATE TABLE product (
	id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255),
	image_name varchar(255),
	price decimal(6,2),
	in_stock int,
	PRIMARY KEY (id)
);

CREATE TABLE customer (
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	product_id int,
	customer_id int,
	quantity int,
	price decimal(6,2),
	tax decimal(6,2),
	donation decimal(4,2),
	timestamp bigint,
	PRIMARY KEY (id),
	FOREIGN KEY (product_id) REFERENCES product(id),
	FOREIGN KEY (customer_id) REFERENCES customer(id)
);




-- Insert data
INSERT INTO product (product_name, image_name, price, in_stock)
VALUES ("Chocolate Chip Cookie", "chocolate_chip_cookies.jpeg", 2.50, 10),
	   ("Iced Pumpkin Spice Cookie", "iced_pumpkin_spice_cookies.jpeg", 2.75, 3),
	   ("Oatmeal Raisin Cookie", "oatmeal_raisin_cookies.jpeg", 2.25, 2),
	   ("Peanut Butter Cookie", "peanut_butter_cookies.jpeg", 2.50, 8),
	   ("Sugar Cookie", "sugar_cookies.jpeg", 2.25, 0);

INSERT INTO customer (first_name, last_name, email)
VALUES ("Mickey", "Mouse", "mmouse@mines.edu"),
	   ("Tony", "Stark", "tstark@avengers.net");




