import React, { useState } from 'react';

function ExerciseLog() {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleLogExercise = (e) => {
    e.preventDefault();
    // Handle exercise log logic here
    console.log('Exercise log submitted:', { exercise, duration, date });
  };

  return (
    <div>
      <h2>Log Exercise</h2>
      <form onSubmit={handleLogExercise}>
        <div>
          <label>Exercise:</label>
          <input 
            type="text" 
            value={exercise} 
            onChange={(e) => setExercise(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Duration (in minutes):</label>
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Log Exercise</button>
      </form>
    </div>
  );
}

export default ExerciseLog;
