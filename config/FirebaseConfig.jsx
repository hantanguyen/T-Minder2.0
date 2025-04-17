// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // hide api key
  apiKey: "AIzaSyBg8Zda9QX7a0pRlrhBwAgCwgyTB5H-lrE",
  authDomain: "t-minder-a0a9b.firebaseapp.com",
  projectId: "t-minder-a0a9b",
  storageBucket: "t-minder-a0a9b.firebasestorage.app",
  messagingSenderId: "539252172266",
  appId: "1:539252172266:web:3286eebf797a6f6c2ffe93",
  measurementId: "G-PEHXR1QF3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app); 
