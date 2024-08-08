// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import GoalPage from './pages/GoalPage';
import HabitPage from './pages/HabitPage';
import CalendarPage from './pages/CalendarPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
     
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/goals" element={<GoalPage />} />
            <Route path="/habits" element={<HabitPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
