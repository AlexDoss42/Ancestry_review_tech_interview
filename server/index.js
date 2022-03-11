const express = require("express");
const app = express();


//middleware
app.use(express.json());

app.listen(5000, () => {
    console.log('ITS WORKING!!!! IIIITTTTTSSSS WORKING!!!! on port 5000')
});
