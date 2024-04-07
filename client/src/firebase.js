// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-app-b72d6.firebaseapp.com",
  projectId: "estate-app-b72d6",
  storageBucket: "estate-app-b72d6.appspot.com",
  messagingSenderId: "598335233638",
  appId: "1:598335233638:web:4eef32becdb719ddb817a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);