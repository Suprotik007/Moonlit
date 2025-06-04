// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGXB3s9I2cFJ6naDZwtBJ8amYvJlDOADM",
  authDomain: "cozy-rooms.firebaseapp.com",
  projectId: "cozy-rooms",
  storageBucket: "cozy-rooms.firebasestorage.app",
  messagingSenderId: "316896949870",
  appId: "1:316896949870:web:40fb21f39cf0339afd587f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)