const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// ADD SURVEY RESULTS

app.post("/api/survey", async(req, res) => {
    try {
        const { customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page } = req.body;
        const newResults = await pool.query("INSERT INTO results (customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page]);
        res.json(newResults.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// GET SURVEY DATA

app.get("/api/data", async(req, res) => {
    const surveyData = {};
    try {
        const numbersData = await pool.query("SELECT AVG(experience_rating) as average_rating, AVG(age) as average_age, COUNT(*) as total_responses FROM results;");
        surveyData.numbersData = numbersData.rows[0];
        const countryDistributionData = await pool.query("select country, count(country) as count from results group by country order by count DESC;")
        surveyData.countryDistributionData = countryDistributionData.rows;
        const genderDistributionData = await pool.query("SELECT gender, count(gender) as count FROM results group by gender order by count DESC;")
        surveyData.genderDistributionData = genderDistributionData.rows;
        res.json(surveyData);
    } catch (error) {
        console.log(error.message);
        console.error(error.message);
    }
} )


app.listen(5000, () => {
    console.log('ITS WORKING!!!! IIIITTTTTSSSS WORKING!!!! on port 5000')
});
