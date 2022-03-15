const express = require("express");
const app = express();
const pool = require("./db");

const dummyData = {
    customer_name: "Ted Lasso",
    email: "tlasso@afcrichmond.com",
    age: 46,
    gender: "male",
    country: "United Kingdom",
    experience_rating: 5,
    suggested_improvement: "Insert toxically over-positive comment",
    origin_page: "http://localhost:3000/dna"
}
//middleware
app.use(express.json());

// ADD SURVEY RESULTS

app.post("/survey", async(req, res) => {
    try {
        const { customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page } = req.body;
        const newResults = await pool.query("INSERT INTO results (customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page]);
        res.json(newResults.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// GET SURVEY DATA

app.get("/data", async(req, res) => {
    try {
        const surveyData = await pool.query("SELECT * FROM results");
        res.json(surveyData.rows)
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log('ITS WORKING!!!! IIIITTTTTSSSS WORKING!!!! on port 5000')
});
