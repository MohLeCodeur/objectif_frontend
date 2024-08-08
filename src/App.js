// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import GoalPage from './pages/GoalPage';
import HabitPage from './pages/HabitPage';
import CalendarPage from './pages/CalendarPage';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/goals"
                element={
                  <PrivateRoute>
                    <GoalPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/habits"
                element={
                  <PrivateRoute>
                    <HabitPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/calendar"
                element={
                  <PrivateRoute>
                    <CalendarPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
        <footer>© 2024 Objectif+</footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
