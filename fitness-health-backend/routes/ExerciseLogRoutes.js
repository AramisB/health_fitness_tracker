const express = require('express');
const { logExercise } = require('../controllers/ExerciseLogController');
const authenticateToken = require('../middlewares/AuthMiddleware');

const router = express.Router();

router.post('/log-exercise', authenticateToken, logExercise);

module.exports = router;
