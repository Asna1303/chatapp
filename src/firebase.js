
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCbe3zOjyTAuTMp4GUx5G1CA6nZBW7ITgY",
  authDomain: "chat-5dffa.firebaseapp.com",
  projectId: "chat-5dffa",
  storageBucket: "chat-5dffa.appspot.com",
  messagingSenderId: "827759033934",
  appId: "1:827759033934:web:110b4e8037a15645b58d1f",
  measurementId: "G-XP663YE3T2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

