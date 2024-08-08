// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Objectif+</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/dashboard">Tableau de Bord</Link></li>
          <li><Link to="/goals">Objectifs</Link></li>
          <li><Link to="/habits">Habitudes</Link></li>
          <li><Link to="/calendar">Calendrier</Link></li>
          <li><Link to="/login">Connexion</Link></li>
          <li><Link to="/register">Inscription</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
