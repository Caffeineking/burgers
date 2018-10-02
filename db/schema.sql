CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    item_id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR
    (45) NOT NULL,
    devoured BOOLEAN DEFAULT false,
  );

