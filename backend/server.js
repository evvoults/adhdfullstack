import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready.");
})

app.get("/tutor", (req, res) => {});

console.log(process.env.MONGO_URI)

app.listen(7001, () => {
    connectDB();
    console.log('Server started at http://localhost:7001');
});

//mongodb+srv://master:8npRsrG6!At%mkb@adhdcluster1.knhqeu6.mongodb.net/?retryWrites=true&w=majority&appName=ADHDCluster1