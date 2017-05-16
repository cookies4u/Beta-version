CREATE DATABASE geddit_test;

DROP DATABASE geddit_test;

-- user one --> course many
-- each user can create many courses. Each course can have only one author
use geddit_test;
SELECT * FROM Users;
INSERT INTO Users (username, password, createdAt, updatedAt) VALUES ('juan', '123', CURRENT_DATE, CURRENT_DATE);  -- course 1
INSERT INTO Users (username, password, createdAt, updatedAt) VALUES ('michelle', '123', CURRENT_DATE, CURRENT_DATE);  -- course 2
INSERT INTO Users (username, password, createdAt, updatedAt) VALUES ('tae', '123', CURRENT_DATE, CURRENT_DATE);  -- course 3
INSERT INTO Users (username, password, createdAt, updatedAt) VALUES ('abtin', '123', CURRENT_DATE, CURRENT_DATE);  -- course 4

-- course one --> review many
-- each course has many reviews. Each review can have only one course 
use geddit_test;
SELECT * FROM  Courses;
INSERT INTO Courses (course_title, course_cat, createdAt, updatedAt, UserId) VALUES ('html newb', 'frontend', CURRENT_DATE, CURRENT_DATE, 4);  -- course 1, created by user 4 
INSERT INTO Courses (course_title, course_cat, createdAt, updatedAt, UserId) VALUES ('html advanced', 'frontend', CURRENT_DATE, CURRENT_DATE, 3);  -- course 2, created by user 3 
INSERT INTO Courses (course_title, course_cat, createdAt, updatedAt, UserId) VALUES ('CSS newb', 'frontend', CURRENT_DATE, CURRENT_DATE, 2);  -- course 3, created by user 2 
INSERT INTO Courses (course_title, course_cat, createdAt, updatedAt, UserId) VALUES ('CSS advanced', 'frontend', CURRENT_DATE, CURRENT_DATE, 1);  -- course 4, created by user 1 
INSERT INTO Courses (course_title, course_cat, createdAt, updatedAt, UserId) VALUES ('jQuery newb', 'frontend', CURRENT_DATE, CURRENT_DATE, 4);  -- course 5, created by user 4

-- user one --> reviews many
-- each user has many reviews. Each review can have only one author
use geddit_test;
SELECT * FROM  Reviews;
INSERT INTO Reviews (review_title, createdAt, updatedAt, CourseId, UserId) VALUES ('Too easy?', CURRENT_DATE, CURRENT_DATE, 1, 2);  -- course 1, review by user 2
INSERT INTO Reviews (review_title, createdAt, updatedAt, CourseId, UserId) VALUES ('Too hard?', CURRENT_DATE, CURRENT_DATE, 1, 3);  -- course 1, review by user 3
INSERT INTO Reviews (review_title, createdAt, updatedAt, CourseId, UserId) VALUES ('Too long', CURRENT_DATE, CURRENT_DATE, 1, 1);  -- course 1, review by user 1
INSERT INTO Reviews (review_title, createdAt, updatedAt, CourseId, UserId) VALUES ('took it twice', CURRENT_DATE, CURRENT_DATE, 2, 1);  -- course 2, review by user 1
INSERT INTO Reviews (review_title, createdAt, updatedAt, CourseId, UserId) VALUES ('couldnt finish', CURRENT_DATE, CURRENT_DATE, 2, 4);  -- course 2, review by user 3

