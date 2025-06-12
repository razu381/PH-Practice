-- -- create table student(
-- --     id SERIAL PRIMARY KEY,
-- --     name VARCHAR(20),
-- --     email VARCHAR(50) UNIQUE NOT NULL,
-- --     age INT
-- -- )

-- -- alter table "New studnets" RENAME to "students"

-- alter table students alter COLUMN name set not null; "Peoples"

-- alter table students add constraint making_email_unique UNIQUE(email) 

-- alter table students drop constraint making_email_unique

-- drop table students


-- create table students(
--     student_id SERIAL PRIMARY KEY,
--     firstName VARCHAR(50),
--     lastName VARCHAR(50),
--     age INT,
--     grade VARCHAR(2),
--     course VARCHAR(50),
--     email VARCHAR(100),
--     dob DATE,
--     blood_group VARCHAR(5),
--     country VARCHAR(50)
-- )

-- alter table students alter grade type CHAR(2)

-- alter table students alter lastName set NOT null;  

-- insert into  students(firstname,lastname,age,grade,course,email,dob,blood_group,country)
-- values ('Alice','Smith',19,'A','Physics','alice.smith@example.com','2005-03-15','O+','USA'),
-- ('Bob','Johnson',21,'B+','Chemistry','bob.j@example.com','2003-07-22','A-','Canada'),
-- ('Charlie','Brown',20,'A+','Computer Science','charlie.b@example.com','2004-11-01','B+','UK'),
-- ('Diana','Miller',18,'B','Literature','diana.m@example.com','2006-01-28','AB-','Australia'),
-- ('Ethan','Davis',22,'C+','Economics','ethan.d@example.com','2002-09-10','O-','Germany'),
-- ('Fiona','Garcia',19,'A-','Biology','fiona.g@example.com','2005-04-03','A+','Spain'),
-- ('George','Rodriguez',23,'B','History','george.r@example.com','2001-02-19','B-','Mexico'),
-- ('Hannah','Martinez',20,'A','Art History','hannah.m@example.com','2004-06-07','O+','France'),
-- ('Ivan','Hernandez',21,'C','Mathematics','ivan.h@example.com','2003-12-25','AB+','Brazil'),
-- ('Julia','Lopez',18,'A+','Psychology','julia.l@example.com','2006-08-11','A+','Italy'),
-- ('Kevin','Gonzalez',24,'B+','Engineering','kevin.g@example.com','2000-10-05','B+','India'),
-- ('Laura','Perez',19,'B','Sociology','laura.p@example.com','2005-01-09','O-','Argentina'),
-- ('Michael','Wilson',20,'A-','Political Science','michael.w@example.com','2004-05-30','A-','South Africa'),
-- ('Nora','Taylor',22,'C+','Graphic Design','nora.t@example.com','2002-03-02','B-','Japan'),
-- ('Oscar','Anderson',21,'A','Data Science','oscar.a@example.com','2003-09-18','O+','Sweden'),
-- ('Paula','Thomas',19,'B+','Nursing','paula.t@example.com','2005-07-04','AB+','Philippines'),
-- ('Quinn','Jackson',20,'A+','Philosophy','quinn.j@example.com','2004-02-29','A+','Ireland'),
-- ('Rachel','White',18,'B','Music','rachel.w@example.com','2006-11-14','B+','New Zealand'),
-- ('Sam','Harris',23,'C','Finance','sam.h@example.com','2001-06-01','O-','Egypt'),
-- ('Tina','Clark',20,'A','Architecture','tina.c@example.com','2004-09-21','A-','Turkey')


-- select email,age,firstname from students

-- select email as "Student Email",age as "Age",firstname from students age
-- --order by asc/dsc
-- select * from students ORDER BY age DESC;

-- select * from students ORDER BY age ASC; age

-- --distinct values only
-- select DISTINCT country from students age

-- --filtering 
-- select * from students
--     where country = 'USA' age

-- select firstname,age,grade from students
--     where age > 18 and (grade = 'A' or grade = 'A+') age

-- select * from students 
--     where (grade = 'A' or grade = 'B') and (course = 'Music' or course = 'History')

-- SELECT * from students
--     WHERE grade <> 'A+' AND grade <> 'A'

--scaler function 
select concat_ws(' ',firstname,lastname) from students  age


