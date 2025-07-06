const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready.");
})

app.get("/tutor", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(7001, () => {
    connectDB();
    console.log('Server started at http://localhost:7001');
});

//render endpoint: https://adhdfullstack.onrender.com