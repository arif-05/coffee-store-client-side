// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDE9fps8VXr2QjlR5Ucv5fnaxry5sKvWM",
  authDomain: "coffee-store-6f2f9.firebaseapp.com",
  projectId: "coffee-store-6f2f9",
  storageBucket: "coffee-store-6f2f9.firebasestorage.app",
  messagingSenderId: "528979299744",
  appId: "1:528979299744:web:4d75201f1242972bdaa8c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;