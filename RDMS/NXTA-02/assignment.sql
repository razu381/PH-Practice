-- Active: 1749540542570@@127.0.0.1@5432@assignment
CREATE TABLE rangers(
    ranger_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    region VARCHAR(30)
)


INSERT INTO rangers(name,region) VALUES
('Alice Green', 'Northern Hills'),
('Bob White','River Delta'),
('Carol King' ,'Mountain Range')

CREATE TABLE species(
    species_id SERIAL PRIMARY KEY,
    common_name  VARCHAR(20),
    scientific_name VARCHAR(30),
    discovery_date DATE,
    conservation_status VARCHAR(10)
)

INSERT INTO species(common_name,scientific_name,discovery_date,conservation_status) VALUES
('Snow Leopard', 'Panthera uncia', '1775-01-01', 'Endangered'),
('Bengal Tiger', 'Panthera tigris ', '1758-01-01', 'Endangered'),
('Red Panda', 'Ailurus fulgens', '1825-01-01', 'Vulnerable'),
('Asiatic Elephant', 'Elephas maximus indicus', '1758-01-01', 'Endangered')


CREATE TABLE sightings(
    sighting_id  SERIAL PRIMARY KEY,
    species_id INT REFERENCES species(species_id),
    ranger_id INT REFERENCES rangers(ranger_id) ON DELETE SET NULL ,
    location VARCHAR(50),
    sighting_time TIMESTAMP,
    notes TEXT

)

INSERT INTO sightings(species_id,ranger_id,location,sighting_time,notes) VALUES
(1, 1, 'Peak Ridge', '2024-05-10 07:45:00', 'Camera trap image captured'),
(2, 2, 'Bankwood Area', '2024-05-12 16:20:00', 'Juvenile seen'),
(3, 3, 'Bamboo Grove East', '2024-05-15 09:10:00', 'Feeding observed'),
(1, 2, 'Snowfall Pass', '2024-05-18 18:30:00')


-- problem 1 
INSERT INTO rangers(name,region) values('Derek Fox','Coastal Plains')

-- Problem 2
SELECT count(DISTINCT species_id) FROM sightings

-- problem 3
SELECT * FROM sightings
WHERE location LIKE('%Pass%')

-- problem 4
SELECT name,count(ranger_id) as total_sightings from sightings
JOIN rangers USING(ranger_id)
GROUP BY sightings.ranger_id,rangers.name
ORDER BY name

-- problem 5
SELECT common_name from species
WHERE species_id NOT IN(SELECT species_id from sightings)

-- problem 6
SELECT common_name,sighting_time,name FROM sightings
JOIN rangers USING(ranger_id)
JOIN species USING(species_id)
ORDER BY sighting_time DESC
LIMIT 2

-- problem 7
UPDATE species
SET conservation_status='Historic'
WHERE discovery_date < '1800-01-01'::date

-- problem 8
select sighting_id, 
    CASE 
        WHEN extract("hour" from sighting_time) < 12 THEN 'Morning'  
        WHEN extract("hour" from sighting_time) > 12 AND extract("hour" from sighting_time) < 17 THEN 'Afternoon' 
        ELSE  'Evening'
    END
FROM sightings

-- problem 9
CREATE OR REPLACE FUNCTION get_inactive_rangers()
RETURNS SETOF INT AS $$
    BEGIN
        RETURN QUERY (SELECT ranger_id from rangers WHERE rangers.ranger_id NOT IN(SELECT sightings.ranger_id from sightings));
    END;
$$ LANGUAGE plpgsql;

DELETE FROM rangers
WHERE ranger_id IN(SELECT * from get_inactive_rangers())


