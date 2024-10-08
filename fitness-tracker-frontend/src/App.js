import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import ExerciseLog from './components/ExerciseLog';
import Goals from './components/Goals';
import Progress from './components/Progress';
import Home from './components/Home';

function App() {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/log-exercise" element={<ExerciseLog />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
