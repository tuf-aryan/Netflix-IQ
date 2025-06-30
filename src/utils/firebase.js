// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQnAudqSTrXOqH8bEzKbMvoiEWJgFjSOc",
  authDomain: "netflixiq.firebaseapp.com",
  projectId: "netflixiq",
  storageBucket: "netflixiq.firebasestorage.app",
  messagingSenderId: "525490189271",
  appId: "1:525490189271:web:d5be2bf141d475292f5192",
  measurementId: "G-LTZZRS0FG8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth   = getAuth(app);