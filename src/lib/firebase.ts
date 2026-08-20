import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwUvqtRzsZeTMBZWa_Q6-xxEQz-D_HpUc",
  authDomain: "tavryz-live.firebaseapp.com",
  projectId: "tavryz-live",
  storageBucket: "tavryz-live.firebasestorage.app",
  messagingSenderId: "195824224605",
  appId: "1:195824224605:web:55567df40c89d1b89180b4",
  measurementId: "G-N8L4Q1FBTE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
