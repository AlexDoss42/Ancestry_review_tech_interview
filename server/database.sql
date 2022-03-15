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