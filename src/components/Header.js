// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/dashboard">Tableau de Bord</Link></li>
          <li><Link to="/goals">Objectifs</Link></li>
          <li><Link to="/habits">Habitudes</Link></li>
          <li><Link to="/calendar">Calendrier</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
