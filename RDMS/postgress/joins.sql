SELECT * from post
JOIN "user" on post.user_id = "user".id 

SELECT * from post
LEFT JOIN "user" on post.user_id = "user".id

SELECT * from "user"
RIGHT JOIN post on post.user_id = "user".id

SELECT * from "user"
FULL JOIN post on post.user_id="user".id

CREATE TABLE employee(
    em_id INT,
    em_name VARCHAR(20),
    dept_id INT
)

CREATE TABLE departments(
    dept_id INT,
    dept_name VARCHAR(20)
)


INSERT INTO employee(em_id,em_name,dept_id) VALUES
(1,'safwan',1),
(2,'rahim',2)


INSERT INTO departments(dept_id,dept_name) VALUES
(1,'engineering'),
(2,'hr')

SELECT * from employee
CROSS JOIN departments


SELECT * from employee
NATURAL JOIN departments