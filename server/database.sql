CREATE DATABASE survey_results;

CREATE TABLE results(
    results_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(55),
    email VARCHAR(55),
    age SMALLINT,
    gender VARCHAR(55),
    country VARCHAR(55),
    experience_rating SMALLINT,
    suggested_improvements TEXT,
    origin_page VARCHAR(255)
);

SELECT AVG(experience_rating) as average_rating, AVG(age) as average_age, COUNT(*) as total_responses FROM results;
SELECT gender, count(gender) FROM results group by gender;
select country, count(country) from results group by country;