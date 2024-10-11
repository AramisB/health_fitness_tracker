const express = require('express');
const { createGoal, getGoals } = require('../controllers/GoalsController');
const authenticateToken = require('../middlewares/AuthMiddleware'); // Ensure this points to your middleware

const router = express.Router();

// Route to create a new goal
router.post('/', authenticateToken, createGoal);

// Route to get all goals for the authenticated user
router.get('/', authenticateToken, getGoals);

module.exports = router;
