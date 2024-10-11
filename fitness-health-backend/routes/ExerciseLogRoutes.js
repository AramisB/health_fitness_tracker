const express = require('express');
const { logExercise } = require('../controllers/ExerciseLogController');
const authenticateToken = require('../middlewares/AuthMiddleware');
const { getExerciseLogs } = require('../controllers/ExerciseLogController');

const router = express.Router();

router.post('/', authenticateToken, logExercise);
router.get('/', authenticateToken, getExerciseLogs);


module.exports = router;
