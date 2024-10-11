const ExerciseLog = require('../models/ExerciseLogModel');

// Log Exercise (already defined)
const logExercise = async (req, res) => {
  const { exercise, duration, date } = req.body;

  try {
    const newLog = new ExerciseLog({
      user: req.user._id,
      exercise,
      duration,
      date,
    });
    await newLog.save();
    res.status(201).json({ message: 'Exercise log saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save exercise log', details: error.message });
  }
};

// Get Exercise Logs for authenticated user
const getExerciseLogs = async (req, res) => {
  try {
    const logs = await ExerciseLog.find({ user: req.user._id });
    res.status(200).json({ logs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve exercise logs', details: error.message });
  }
};

module.exports = {
  logExercise,
  getExerciseLogs,
};
