import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <h1>Health and Fitness Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/log-exercise">Log Exercise</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/progress">Progress</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
