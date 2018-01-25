/* Seed data for buses */
INSERT INTO BUSES (bus_number, capacity, home_base) VALUES (12, 70, "chs");

/* seed data for students*/
INSERT INTO students (student_last_name, student_first_name, guardian_name, guardian_email, address, busrider) VALUES ("Smith", "Tommy", "Pamela Smith", "psmith@email.com", "200 Fountain Lane Conroe Texas 77304", True);

INSERT INTO students (student_last_name, student_first_name, gender, guardian_name, guardian_email, address, busrider) VALUES ("Johnson", "Bobby", "Male", "Tammi Johnson", "tj@email.com", "1971 O'Grady Dr Conroe Texas 77304", True);

INSERT INTO students (student_last_name, student_first_name, gender, guardian_name, guardian_email, address, busrider) VALUES ("Washington", "Georgie", "Male", "Marth Washington", "mw@email.com", "24 Dover Dr Conroe, TX 77304", False);

INSERT INTO students (student_last_name, student_first_name, gender, guardian_name, guardian_email, address, busrider) VALUES ("Thopson", "Toby", "Male", "Jennie Thompson", "jt@email.com", "111 Kathy St Conroe, TX 77301", True);

INSERT INTO students (student_last_name, student_first_name, gender, guardian_name, guardian_email, address, busrider) VALUES ("Juarez", "Emma", "Female", "Marta Juarez", "mj@email.com", "1024 N San Jacinto St Conroe, TX 77301", True);

/* seed data for bus driver */
INSERT INTO drivers (driver_first_name, driver_last_name, driver_img, driver_comments) VALUES ('Bussy', 'Gonzalez', 'Drives very spiffily');
