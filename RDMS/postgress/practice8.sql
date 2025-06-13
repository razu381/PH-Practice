CREATE TABLE students_data(
    id SERIAL PRIMARY KEY,
    roll INT UNIQUE,
    name VARCHAR(50),
    age INT,
    department VARCHAR(20),
    score FLOAT,
    status  CHAR(6),
    last_login DATE
)


ALTER TABLE students_data 
    ALTER score TYPE NUMERIC(5,2)

Alter TABLE students_data
    ADD email VARCHAR(20)

ALTER TABLE students_data
    RENAME COLUMN students_email to student_email

ALTER TABLE students_data
    ADD CONSTRAINT unique_email UNIQUE(student_email) 

CREATE TABLE courses(
    id SERIAL,
    courseName VARCHAR(20)
)

ALTER TABLE courses
    ADD CONSTRAINT making_id_primary PRIMARY KEY(id) 

ALTER TABLE courses
    DROP courseName 

INSERT INTO students_data (name, age, department, score, status, last_login, student_email) VALUES
('Liam Davis', 20, 'Computer Science', 88.5, 'Active', '2025-06-10', 'liam.davis@example.com'),
('Olivia White', 21, 'Electrical Eng', 75.2, 'Active', '2025-05-28', 'olivia.white@example.com'),
('Noah Miller', 19, 'Physics', 91.0, 'Active', '2025-06-05', 'noah.miller@example.com'),
('Emma Garcia', 22, 'Chemistry', 62.1, 'Inacti', '2024-12-01', 'emma.garcia@example.com'),
('Jackson Rodriguez', 20, 'Computer Science', 96.7, 'Active', '2025-06-11', 'jackson.r@example.com'),
('Sophia Martinez', 21, 'Mechanical Eng', 79.9, 'Active', '2025-06-03', 'sophia.m@example.com'),
('Aiden Hernandez', 19, 'Mathematics', 84.0, 'Active', '2025-06-09', 'aiden.h@example.com'),
('Mia Lopez', 23, 'Civil Eng', 58.3, 'Inacti', '2024-10-20', 'mia.lopez@example.com'),
('Lucas Perez', 20, 'Biology', 87.6, 'Active', '2025-06-07', 'lucas.perez@example.com'),
('Charlotte Lee', 22, 'Computer Science', 70.0, 'Active', '2025-06-06', 'charlotte.l@example.com');


ALTER TABLE students_data
    ALTER student_email type VARCHAR(50)

UPDATE students_data 
    set student_email = NULL
    where id  = 21

SELECT name,score from students_data
    where score > 80 and score is NOT NULL 

UPDATE students_data
    set roll = id-11

SELECT * from students_data
    WHERE department NOT IN('Biology')

SELECT * FROM students_data
    WHERE name ILIKE('A%')

SELECT * FROM students_data
    WHERE age BETWEEN 18 and 25

SELECT * from students_data
    WHERE roll IN(1,2,4,5)

SELECT count(*) FROM students_data

SELECT avg(score) FROM students_data
    WHERE department='Biology'

SELECT max(age) FROM students_data

SELECT min(age) FROM students_data

UPDATE students_data
    SET status = 'passed'
    WHERE score >= 60


DELETE FROM students_data
    WHERE last_login < '2025-01-01'

SELECT * FROM students_data
    LIMIT 5
    OFFSET 5 * 1  