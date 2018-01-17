
DROP DATABASE IF EXISTS busapp_db;
CREATE DATABASE busapp_db;
USE busapp_db;

-- relationship = association in sequelize

--bus always has a one to many relationship with drivers

--bus has a one to many relationship with students if routes are not incorporated
--bus has no relationship with students and a one to many relationship with routes if we get that far

CREATE TABLE bus 
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    -- bus_number INT(4) NOT NULL, -not necessary- ID field serves this purpose
	capacity INT(4) NOT NULL,
    home_base VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
    );

-- driver has a many to one relationship with bus
CREATE TABLE driver
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    driver_first_name VARCHAR(40) NOT NULL,
    driver_last_name VARCHAR(40) NOT NULL,
    driver_img LONGBLOB,
    driver_comments TEXT,
    PRIMARY KEY (id)
    );


--student has a many to one relationship with bus
--student will have a many to one relationship with route and no relationship with bus if we get that far and not incorporating stops yet
--student will have a many to one relationship with stops and no relationship with routes if we end up getting this far
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
    --addresses should not be incorporated into this because the same data can be stored into two fields meaningfully
    -- address_num INT(4) NOT NULL,
    -- address_stname VARCHAR(40) NOT NULL,
    -- city VARCHAR(40) NOT NULL,
    -- st VARCHAR(40) NOT NULL,
	-- zipcode INT(4) NOT NULL,
    busrider BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
    );

-- route is on the backburner for now but I want it in here as a reminder
-- this has a many to one relationship with buses
-- this has a one to many relationship with stops
-- CREATE TABLE busRoute 
-- (
--     id INT(4) NOT NULL AUTO_INCREMENT,
--     PRIMARY KEY (id)
--     );

-- stops is on the backburner for now but I want it in here as a reminder
-- this would have a many to one relationship with route
-- this would have a one to many relationship with students
-- CREATE TABLE busRoute 
-- (
--     id INT(4) NOT NULL AUTO_INCREMENT,
--     PRIMARY KEY (id),
--     stop_lat DOUBLE,
--     stop_long DOUBLE
--     );
