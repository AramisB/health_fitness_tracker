const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
