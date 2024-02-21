
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCim7w80d5EhJh7NnSaXx3WWMpJh6bXQfo",
  authDomain: "chat-bd75f.firebaseapp.com",
  projectId: "chat-bd75f",
  storageBucket: "chat-bd75f.appspot.com",
  messagingSenderId: "572385805492",
  appId: "1:572385805492:web:987020f62d1c8392aa03e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();