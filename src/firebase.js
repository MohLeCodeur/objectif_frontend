// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDeDPFOpgFjrNBIjrwxov8S9PCdk6Ynyk8",
    authDomain: "objectifplus-15dca.firebaseapp.com",
    projectId: "objectifplus-15dca",
    storageBucket: "objectifplus-15dca.appspot.com",
    messagingSenderId: "809664487243",
    appId: "1:809664487243:web:0d63b14374f0952ca312ce",
    measurementId: "G-BNW5QZ7EN1"
  };

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Obtenir l'instance d'authentification
const auth = getAuth(app);

// Exporter l'authentification
export { auth };
