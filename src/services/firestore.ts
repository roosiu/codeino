import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcV3ulo7IdbkqnUy82aF-fhivVyoW-uQw",
  authDomain: "codeino-fa78a.firebaseapp.com",
  projectId: "codeino-fa78a",
  storageBucket: "codeino-fa78a.appspot.com",
  messagingSenderId: "22039178239",
  appId: "1:22039178239:web:e1731ab75b99274cb055ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
