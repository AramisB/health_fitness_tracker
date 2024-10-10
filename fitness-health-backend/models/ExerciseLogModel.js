const mongoose = require('mongoose');

const exerciseLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
  exercise: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const ExerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema);
module.exports = ExerciseLog;
