CREATE DATABASE IF NOT EXISTS organica;
USE organica;

CREATE TABLE IF NOT EXISTS product (
    product_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255),
    description TEXT,
    price DOUBLE,
    img VARCHAR(255),
    weight DOUBLE
);
