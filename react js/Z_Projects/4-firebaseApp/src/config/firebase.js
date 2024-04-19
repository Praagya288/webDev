// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBTGLiVAABH8SneqXrd-u_R_bQ7UpNsbo",
  authDomain: "vite-contact-d00c5.firebaseapp.com",
  projectId: "vite-contact-d00c5",
  storageBucket: "vite-contact-d00c5.appspot.com",
  messagingSenderId: "903562460816",
  appId: "1:903562460816:web:3e7c51457cc0dcb9fa2215"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;