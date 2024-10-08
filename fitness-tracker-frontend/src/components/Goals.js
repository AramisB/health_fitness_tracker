import React, { useState } from 'react';

function Goals() {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSetGoal = (e) => {
    e.preventDefault();
    // Handle goal setting logic here
    console.log('Goal submitted:', { goal, deadline });
  };

  return (
    <div>
      <h2>Set Fitness Goals</h2>
      <form onSubmit={handleSetGoal}>
        <div>
          <label>Goal:</label>
          <input 
            type="text" 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Deadline:</label>
          <input 
            type="date" 
            value={deadline} 
            onChange={(e) => setDeadline(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
}

export default Goals;
