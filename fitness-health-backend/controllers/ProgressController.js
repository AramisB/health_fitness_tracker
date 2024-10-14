const Progress = require('../models/ProgressModel');
const ExerciseLog = require('../models/ExerciseLogModel');

const createProgress = async (req, res) => {
  const { exerciseType, duration, caloriesBurned, date } = req.body;

  try {
    const newProgress = new Progress({
      user: req.user._id,
      exerciseType,
      duration,
      caloriesBurned,
      date,
    });

    await newProgress.save();
    res.status(201).json({ msg: 'Progress entry created successfully', progress: newProgress });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to create progress entry', details: error.message });
  }
};

// Fetch all progress (exercise logs) for the authenticated user
const getProgress = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is stored in the token
    const exerciseLogs = await ExerciseLog.find({ userId }); // Find exercise logs for this user
    res.json({ progress: exerciseLogs }); // Return the logs
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching progress' });
  }
};

module.exports = { createProgress, getProgress };
