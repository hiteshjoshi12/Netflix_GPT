// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7KXwB3biT825yyCtowbBhLp4_3soky5E",
  authDomain: "netflix-gpt-62588.firebaseapp.com",
  projectId: "netflix-gpt-62588",
  storageBucket: "netflix-gpt-62588.firebasestorage.app",
  messagingSenderId: "655416626177",
  appId: "1:655416626177:web:cc4b51c45ffc55dff54400",
  measurementId: "G-KQKY93HS6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();