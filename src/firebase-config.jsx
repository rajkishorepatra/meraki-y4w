// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA5Pc3-vBf1tjFLIMEChBEHog59SjIJCk",
  authDomain: "youth4waterplus-f2528.firebaseapp.com",
  projectId: "youth4waterplus-f2528",
  storageBucket: "youth4waterplus-f2528.appspot.com",
  messagingSenderId: "91364469133",
  appId: "1:91364469133:web:b939bf79c5fabfa213b5c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
