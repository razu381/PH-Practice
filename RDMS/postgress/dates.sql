select now() 

select CURRENT_DATE

SELECT date_part('month',dob) from students

SELECT age(dob) from students 

SELECT last_login from students_data
    WHERE last_login > now() - INTERVAL '2 day'

SELECT department from students_data
    GROUP BY department

SELECT department,count(*) from students_data
    GROUP BY department

SELECT department,avg(age) from students_data
    GROUP BY department
    HAVING avg(age) >= 21 

SELECT extract(year from dob) as birth_year,count(*) from students
    GROUP BY birth_year 