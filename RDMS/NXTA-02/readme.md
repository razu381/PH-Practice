#### 1.What is the difference between the VARCHAR and CHAR data types?

VARCHAR means storage size for this column is variable . so if we create a column with the type VARCHAR(10), and store 'hello' here. It will only take memory for those 5 characters.

On the other hand if we use CHAR(10), then store 'hello'. It will consume full 10 character memory and pad the remaining spaces with blank space.

| Trait       | VARCHAR                                                                        | CHAR                                                          |
| :---------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------ |
| Space       | Consume only space necessary                                                   | Consume full space                                            |
| Padding     | Dont add padding                                                               | Adds padding to the remaining space                           |
| Performance | Little less performant than CHAR, though it is negligible for modern databases | Better performant as system know how much data it will occupy |

#### 2. Explain the purpose of the WHERE clause in a SELECT statement.

We use `WHERE` clause to filter our data based on conditions and narrowing down result from a table or joined tables

```sql
SELECT * FROM sightings
WHERE location LIKE('%Pass%')
```

We are using `WHERE` here to filter out data in location column which have the word `Pass` in it.

#### 3.What are the LIMIT and OFFSET clauses used for?

We use `limit` and `offset` to create pagination for data, allowing us to get specific subset of rows from a larger result set.

**LIMIT:** We can use `LIMIT` to limit the number of data that will be displayed at once.

**OFFSET:** We use `OFFSET` to skip specified number of rows before returning data.

```sql
SELECT common_name,sighting_time,name FROM sightings
JOIN rangers USING(ranger_id)
JOIN species USING(species_id)
ORDER BY sighting_time DESC
LIMIT 2
OFFSET 1
```

Here we are displaying only last 2 sightigs but we are skipping one result/row.

#### 4. How can you modify data using UPDATE statements?

Steps to modify data using `UPDATE`:

1. Select the database where we will update the data
   `UPDATE species`
2. Select the column where where we will update the value and provide the value
   `SET conservation_status='Historic'`
3. Add the condition to filter the row where we will update
   `WHERE discovery_date < '1800-01-01'::date`

Full code:

```sql
UPDATE species
SET conservation_status='Historic'
WHERE discovery_date < '1800-01-01'::date
```

#### 5. What is the significance of the JOIN operation, and how does it work in PostgreSQL?

We use `JOIN` to link multiple table together. It is recommended to normalize tables in postgress which means we break down tables into smaller tables and add the relation with foreign key. So when we need data from another table we can use the `	JOIN` operation.

`JOIN` works by comparing between two tables using foreign key of one table to primary key of another table.When it finds a match, a new row is created from both tables and returned to the new result set.

```sql
SELECT name,count(ranger_id) as total_sightings from sightings
JOIN rangers USING(ranger_id)
GROUP BY sightings.ranger_id,rangers.name
ORDER BY name
```

Here we are joining sightings table to rangers table uisng ranger_id which is present on both tables.
