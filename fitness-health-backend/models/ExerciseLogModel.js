const mongoose = require('mongoose');

const exerciseLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  exerciseType: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  caloriesBurned: { type: Number, required: true },
});

module.exports = mongoose.model('ExerciseLog', exerciseLogSchema);
