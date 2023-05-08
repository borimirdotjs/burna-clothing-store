import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL1gR7d-5EIoBhxOAxvuP2rkpyugxnV20",
  authDomain: "burna-clothing-store.firebaseapp.com",
  projectId: "burna-clothing-store",
  storageBucket: "burna-clothing-store.appspot.com",
  messagingSenderId: "766192638444",
  appId: "1:766192638444:web:e3ff797655b73a8d6448c9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
