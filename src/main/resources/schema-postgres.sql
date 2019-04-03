DROP TABLE IF EXISTS users;

CREATE TABLE users(
userid serial PRIMARY KEY,
firstname VARCHAR(20),
lasttname VARCHAR(20),
email VARCHAR(30),
password VARCHAR(20),
subscription boolean
);