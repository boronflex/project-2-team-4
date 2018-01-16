DROP DATABASE IF EXISTS busapp_db
CREATE DATABASE busapp_db;
USE student_tracker;

CREATE TABLE bus 
(
    id INT(100) NOT NULL AUTO_INCREMENT,
    bus_number INT(20) NOT NULL,
    bus_driver VARCHAR() NOT NULL,
    riders VARCHAR(255) NOT NULL,
	capacity INT(200) NOT NULL,
    home_base VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
    );
    
CREATE TABLE student
(
	id INT(100) NOT NULL AUTO_INCREMENT,
    bus_number INT(200) NOT NULL,
    student_last_name VARCHAR(255) NOT NULL,
    student_first_name VARCHAR(255) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    grade_level INT(20) NOT NULL,
    guardian_name VARCHAR(100) NOT NULL,
    guardian_email VARCHAR(255) NOT NULL,
    address_num INT(10) NOT NULL,
    address_stname VARCHAR(100) NOT NULL,
    city VARCHAR(20) NOT NULL,
    st VARCHAR(20) NOT NULL,
	zipcode INT(10) NOT NULL,
    bus_rider BOOLEAN DEFAULT FALSE
    PRIMARY KEY (id)
    );