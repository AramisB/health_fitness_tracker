const ExerciseLog = require('../models/ExerciseLogModel');

const logExercise = async (req, res) => {
  const { exercise, duration, date } = req.body;

  try {
    const newLog = new ExerciseLog({
        user: req.user._id,
        exercise,
        duration,
        date
    });
    await newLog.save();
    res.status(201).json({ message: 'Exercise log saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save exercise log', details: error.message });
  }
};

module.exports = {
  logExercise,
};
