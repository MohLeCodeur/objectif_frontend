// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await axios.post('/api/register', { name, email, password });
      // Gérer l'inscription
      console.log(response.data);
    } catch (error) {
      console.error("Erreur d'inscription", error);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default RegisterPage;
