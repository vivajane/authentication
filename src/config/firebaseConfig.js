// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeRUGcMZxAH2KZOM3TzpjWmIEKWzgv9Mk",
  authDomain: "authentication-9af8a.firebaseapp.com",
  projectId: "authentication-9af8a",
  storageBucket: "authentication-9af8a.firebasestorage.app",
  messagingSenderId: "536172846869",
  appId: "1:536172846869:web:62a093362ebf872dcc131c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);