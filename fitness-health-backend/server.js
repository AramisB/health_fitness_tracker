const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ExerciseLogRoutes = require('./routes/ExerciseLogRoutes');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const GoalsRoutes = require('./routes/GoalsRoutes');
const ProgressRoutes = require('./routes/ProgressRoutes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
    origin: 'https://health-fitness-tracker.vercel.app'
  })); // Enable CORS
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api/log-exercise', ExerciseLogRoutes);
app.use('/api/goals', GoalsRoutes);
app.use('/api/progress', ProgressRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
