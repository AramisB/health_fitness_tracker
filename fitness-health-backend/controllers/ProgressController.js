const Progress = require('../models/ProgressModel');

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

// Get all progress entries for the authenticated user
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user._id });
    res.status(200).json({ progress });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch progress', details: error.message });
  }
};

module.exports = { createProgress, getProgress };
