/* Use new database */
USE brnr

/* Create products table with ID, name, dimensions, price, and volume of wood */
CREATE TABLE products
(
id INT(45) NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
dimensions VARCHAR(30) NOT NULL,
price INT(5) NOT NULL,
volume VARCHAR(30) NOT NULL
);

/* Seed database */
INSERT INTO products (name, dimensions, price, volume) 
VALUES
("BRnr Cord", "4'x 4'x 8'", 500, "128 Cubic Feet"),
("BRnr Half Cord", "4'x 4'x 4'", 350, "64 Cubic Feet"),
("BRnr Face Cord", "4'x 8'x 16\"", 310, "42.6 Cubic Feet"),
("BRnr Quarter Cord", "4'x 6'x 16\"", 275, "64 Cubic Feet"),
("BRnr White Birch Firewood", "4'x 4'x 16\"", 275, "42.6 Cubic Feet");