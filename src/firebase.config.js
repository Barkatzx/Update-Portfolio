// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf6yp-4TmLtXT9HQtFYqJ-QGog6RK-Doc",
  authDomain: "barkat-portfolio.firebaseapp.com",
  projectId: "barkat-portfolio",
  storageBucket: "barkat-portfolio.appspot.com",
  messagingSenderId: "74877470868",
  appId: "1:74877470868:web:a6ecc05f1d189796234c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;