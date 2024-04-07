// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d4182.firebaseapp.com",
  projectId: "mern-estate-d4182",
  storageBucket: "mern-estate-d4182.appspot.com",
  messagingSenderId: "418240605853",
  appId: "1:418240605853:web:322bcb1d0251b1f1b3ae74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);