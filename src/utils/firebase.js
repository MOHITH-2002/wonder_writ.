// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "wonderwrit-a1402.firebaseapp.com",
  projectId: "wonderwrit-a1402",
  storageBucket: "wonderwrit-a1402.appspot.com",
  messagingSenderId: "429546460621",
  appId: "1:429546460621:web:ffd05199ef686c2b50a084"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);