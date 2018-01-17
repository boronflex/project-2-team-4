
DROP DATABASE IF EXISTS busapp_db;
CREATE DATABASE busapp_db;
USE busapp_db;

CREATE TABLE bus 
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    bus_number INT(4) NOT NULL,
    riders VARCHAR(40) NOT NULL,
	capacity INT(4) NOT NULL,
    home_base VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
    );

-- route is on the backburner for now but i want it in here as a reminder
-- CREATE TABLE busRoute 
-- (
--     id INT(4) NOT NULL AUTO_INCREMENT,
--     PRIMARY KEY (id)
--     );

CREATE TABLE driver
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    driver_first_name VARCHAR(40) NOT NULL,
    driver_last_name VARCHAR(40) NOT NULL,
    driver_img LONGBLOB,
    driver_comments TEXT,
    PRIMARY KEY (id)
    );
    
CREATE TABLE student
(
	id INT(4) NOT NULL AUTO_INCREMENT,
    student_last_name VARCHAR(40) NOT NULL,
    student_first_name VARCHAR(40) NOT NULL,
    gender VARCHAR(40) NOT NULL,
    grade_level INT(4) NOT NULL,
    guardian_name VARCHAR(40) NOT NULL,
    guardian_email VARCHAR(40) NOT NULL,
    address_lat DOUBLE,
    address_long DOUBLE,
    -- address_num INT(4) NOT NULL,
    -- address_stname VARCHAR(40) NOT NULL,
    -- city VARCHAR(40) NOT NULL,
    -- st VARCHAR(40) NOT NULL,
	-- zipcode INT(4) NOT NULL,
    bus_rider BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
    );
