const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ExerciseLogRoutes = require('./routes/ExerciseLogRoutes');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api/', ExerciseLogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
