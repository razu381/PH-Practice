create TABLE user_data(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50)
)

INSERT INTO user_data(name,email) VALUES
('razu','sirazu52@gmail.com'),
('safwan','safwan.nur@gmail.com')

CREATE TABLE delete_log(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50),
    deleted_at TIMESTAMP
)

CREATE OR REPLACE FUNCTION log_deleted_user()
RETURNS TRIGGER
AS $$
    BEGIN
        
        INSERT INTO delete_log(name,email,deleted_at) VALUES(old.name,old.email,now());
        RAISE NOTICE 'USER HAS LOGGED';
        RETURN OLD;
    END; 
$$ LANGUAGE plpgsql;



CREATE TRIGGER log_deleted_user_trigger
BEFORE DELETE
ON user_data
FOR EACH ROW
EXECUTE FUNCTION log_deleted_user();



SELECT * FROM user_data

DELETE FROM user_data
    WHERE user_id=2

SELECT * from delete_log