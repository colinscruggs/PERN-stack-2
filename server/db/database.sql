------------ FOR REFERENCE ------------

-- access psql as admin
psql -U postgres

-- list all databases
\l

-- connect to a database as a specified user
\c database_name 

-- view current database tables
\dt

-- view table's schema
\d table_name

-- to quit
\q

-- create a database
CREATE DATABASE database_name

-- create a table
CREATE TABLE products (
    p_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price INT,
    on_sale BOOLEAN 
);

-- modify a table
ALTER TABLE products ADD COLUMN featured BOOLEAN;
ALTER TABLE products DROP COLUMN featured;

-- add in a column with NOT NULL constaint by assigning DEFAULT to existing rows
ALTER TABLE products ADD COLUMN required_column BOOLEAN NOT NULL DEFAULT false;

-- drop a table
DROP TABLE table_name;

-- alter data in a table
UPDATE table_name SET column_name = value WHERE condition;

-- delete data from a table
DELETE FROM table_name WHERE condition;


------------ FOR PROJECT ------------

CREATE TABLE restaurants (
    r_id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >=1 and price_range <= 4)
);

INSERT INTO restaurants (name, location, price_range) VALUES ('McDonalds', 'Denton, TX', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Barley & Board', 'Denton, TX', 3);