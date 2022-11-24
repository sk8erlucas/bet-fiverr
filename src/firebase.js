// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAanIkuu9IzFG7yK0xia931UcOV4kmfAIY",
  authDomain: "bet-chat-1b682.firebaseapp.com",
  projectId: "bet-chat-1b682",
  storageBucket: "bet-chat-1b682.appspot.com",
  messagingSenderId: "227698387998",
  appId: "1:227698387998:web:182faa6bc05c458300120f",
  measurementId: "G-RXVKL6H1J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)