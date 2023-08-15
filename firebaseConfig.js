// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrkyJ4zrS4zn82jC-uxYQxXWAZo8lTEfk",
  authDomain: "nanas-cusine.firebaseapp.com",
  projectId: "nanas-cusine",
  storageBucket: "nanas-cusine.appspot.com",
  messagingSenderId: "162454071935",
  appId: "1:162454071935:web:9ac487b12f069212376d4a",
  measurementId: "G-SC58R6RY5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { firebaseConfig, auth, app, db };