// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC45bnQBy0kwtz0u8y1i-fGuxJ4BR4inR4",
  authDomain: "coffee-store-9001c.firebaseapp.com",
  projectId: "coffee-store-9001c",
  storageBucket: "coffee-store-9001c.firebasestorage.app",
  messagingSenderId: "252949733127",
  appId: "1:252949733127:web:d342a345eec52e6fd3afa2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig)
 export const auth = getAuth(app);


