const ExerciseLog = require('../models/ExerciseLogModel');

// Log Exercise
const logExercise = async (req, res) => {
  const { exercise, duration, date } = req.body;

  try {
    const newLog = new ExerciseLog({
      userId: req.user.id, // Extracted from the token
      exerciseType: exercise,
      duration,
      date: new Date(date),
      caloriesBurned: calculateCalories(exercise, duration),
    });

    await newLog.save();
    res.status(201).json({ message: 'Exercise logged successfully!' });
  } catch (error) {
    console.error('Error logging exercise:', error); // Log error for debugging
    res.status(500).json({ message: 'Failed to log exercise', error: error.message });
  }
};

function calculateCalories(exercise, duration) {
  const exerciseCalories = {
    Running: 10,
    Cycling: 8,
    Walking: 5,
    Swimming: 9,
    JumpingRope: 12,
    Weightlifting: 6,
    BodyweightExercises: 7,
    Yoga: 4,
    Pilates: 4,
    Stretching: 2,
    HIIT: 11,
    Soccer: 10,
    Basketball: 9,
    Tennis: 8,
  };
  
  return (exerciseCalories[exercise] || 0) * duration; // Default to 0 if exercise not found
}

// Get Exercise Logs for authenticated user
const getExerciseLogs = async (req, res) => {
  try {
    const logs = await ExerciseLog.find({ userId: req.user.id }); // Match with userId
    res.status(200).json({ logs });
  } catch (error) {
    console.error('Error retrieving exercise logs:', error); // Log error for debugging
    res.status(500).json({ error: 'Failed to retrieve exercise logs', details: error.message });
  }
};

module.exports = {
  logExercise,
  getExerciseLogs,
};
