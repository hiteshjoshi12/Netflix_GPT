// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC83MyCwRMPhobQgNTVQ0q-W3Htx2BRryE",
  authDomain: "netflix-co-in.firebaseapp.com",
  projectId: "netflix-co-in",
  storageBucket: "netflix-co-in.appspot.com",
  messagingSenderId: "338940784938",
  appId: "1:338940784938:web:bda4578efdf8ab00122e53",
  measurementId: "G-FXWSRE7S95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();