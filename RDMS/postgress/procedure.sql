CREATE or REPLACE PROCEDURE deleteUser(p_emp_id int)
LANGUAGE plpgsql
AS
$$
    DECLARE 
    test_var INT;
    BEGIN
        SELECT p_emp_id INTO test_var FROM employees WHERE employee_id = p_emp_id;
        DELETE FROM employees WHERE employee_id=test_var;

        RAISE NOTICE 'Employee removed';
    END
$$


CALL deleteuser(28)