const Goal = require('../models/GoalsModel');

// Create a new goal
const createGoal = async (req, res) => {
  const { goal, deadline } = req.body;

  try {
    const newGoal = new Goal({
      user: req.user._id, // Use the authenticated user ID
      goal,
      deadline,
    });

    await newGoal.save();
    res.status(201).json({ msg: 'Goal created successfully', goal: newGoal });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to create goal', details: error.message });
  }
};

// Get all goals for the authenticated user
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id }); // Find goals by user ID
    res.status(200).json({ goals });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch goals', details: error.message });
  }
};

module.exports = {
  createGoal,
  getGoals,
};
