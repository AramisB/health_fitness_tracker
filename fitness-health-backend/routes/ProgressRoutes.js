const express = require('express');
const { createProgress, getProgress } = require('../controllers/ProgressController');
const authenticateToken = require('../middlewares/AuthMiddleware');

const router = express.Router();

// Route to create a new progress entry
router.post('/', authenticateToken, createProgress);

// Route to get all progress entries for the authenticated user
router.get('/', authenticateToken, getProgress);

module.exports = router;
