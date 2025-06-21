CREATE OR REPLACE FUNCTION delete_emp_by_id(p_emp_id INT)
RETURNS void
LANGUAGE SQL
AS
$$
    DELETE FROM employees WHERE employee_id=p_emp_id
$$

SELECT delete_emp_by_id(30)