const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config();

const documentRoutes = require('./routes/documentRoutes.js');
const sectionRoutes = require('./routes/sectionsRoutes.js');
const questionRoutes = require('./routes/questionsRoutes.js');
const promptRoutes = require('./routes/promptsRoutes.js');

const app = express();

// ✅ Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ✅ Routes
app.get("/", (req, res) => {
    res.send("Server is ready.");
});

app.get("/tutor", (req, res) => {
    res.send("Tutor route active");
});

// Tutor backend routes
app.use('/documents', documentRoutes);
app.use('/sections', sectionRoutes);
app.use('/questions', questionRoutes);
app.use('/prompts', promptRoutes);

// ✅ Final Error Handler
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

// ✅ Σύνδεση με MongoDB και εκκίνηση server
connectDB();

const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});

// Μπορείς να το αφαιρέσεις αν δε χρειάζεται debugging
console.log('MONGO_URI:', process.env.MONGO_URI);

module.exports = app;