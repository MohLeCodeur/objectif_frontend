// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios';
import { auth } from '../firebase'; // Assurez-vous que le chemin est correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // Envoyer le token Firebase au backend pour l'authentification
        user.getIdToken().then((token) => {
          axios.post('http://localhost:8000/api/firebase-login', { token })
            .then(response => {
              // Stocker le token de session ou autre information
              localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
              console.error('Error during Firebase login:', error);
            });
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      const response = await axios.post('http://localhost:8000/api/firebase-login', { token });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      const response = await axios.post('http://localhost:8000/api/firebase-register', { token });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
