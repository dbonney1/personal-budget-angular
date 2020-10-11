// Budget API

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
// read from json file synchronously to retrieve raw data
const budgetJSON = fs.readFileSync('./budget-data.json');
// parse the raw data to create a readable object from the JSON
const budget = JSON.parse(budgetJSON);


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    // send budget object in JSON response
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});