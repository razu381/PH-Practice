CREATE VIEW dept_avg_salary
AS
SELECT department_name,round(avg(salary)) from employees GROUP BY department_name

drop View dept_avg_salary


SELECT * from dept_avg_salary