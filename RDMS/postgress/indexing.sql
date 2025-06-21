
CREATE INDEX idx_name ON employees(employee_name)

EXPLAIN ANALYSE
SELECT * FROM employees WHERE employee_name='Andrew Cook'