CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20)
)

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title TEXT,
    user_Id INTEGER REFERENCES "user"(id) ON DELETE SET NULL
)

INSERT INTO "user" (username) VALUES
('alice_wonders'),
('bob_builder'),
('charlie_coder'),
('diana_data'),
('eve_explorer'),
('frank_finch'),
('grace_hopper'),
('harrison_dev'),
('isabelle_art'),
('jack_travels');

INSERT INTO "user"(id,username) VALUES(11,'safwan12')

INSERT INTO post (title, user_Id) VALUES
('Getting Started with SQL', 1),
('My First PostgreSQL Query', 1),
('Building a Simple Web App', 2),
('Debugging CSS Issues', 2),
('Understanding Data Normalization', 3),
('Advanced Python Techniques', 3),
('Exploring New Coffee Shops', 4),
('Travel Photography Tips', 4)
-- ('Hiking Trails in the Mountains', 5),
-- ('Latest AI Breakthroughs', 5),
-- ('The Art of Storytelling', 6),
-- ('Healthy Meal Prep Ideas', 6),
-- ('Learning a New Language', 7),
-- ('Gardening for Beginners', 7),
-- ('Tips for Remote Work', 8),
-- ('My Favorite Books of the Year', 8),
-- ('Digital Painting Techniques', 9),
-- ('Creative Writing Prompts', 9),
-- ('Exploring Ancient Ruins', 10),
-- ('Future of Space Exploration', 10)


INSERT INTO post(title,user_id)
    VALUES('How to learn mern stack development',NULL),
    ('How to nurture  a  house plant',NULL)

INSERT INTO post(title,user_id)
    VALUES(NULL,11),
    (NULL,11)


DROP Table post

