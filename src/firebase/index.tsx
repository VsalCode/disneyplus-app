import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disneyplus-clone-3455a.firebaseapp.com",
  projectId: "disneyplus-clone-3455a",
  storageBucket: "disneyplus-clone-3455a.firebasestorage.app",
  messagingSenderId: "24658548868",
  appId: "1:24658548868:web:865bc9c7cd0dbb82b28ad1",
  measurementId: "G-Q5C1W46KEX"
};

const firebaseapp = initializeApp(firebaseConfig);

export default firebaseapp

