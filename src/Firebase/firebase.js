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
  stripeSecret:
    "sk_test_51N12ITItvAkO3xaQJxmNQN8jYVQgSQuyYMX8Bj8BtHQY9qG0uyHb4TEQUTmg6Zf2QCZF9ZTPgDAG1a0I4SlRWS4b00dKHcmwzT",
  stripePublishableKey:
    "pk_test_51N12ITItvAkO3xaQ4GtQB0gz7H8SBfNGx6YADQ2yB0mGuTsKatslhhnHPYvxG4LJ8lXnEUwk0056GbesicYlkKvo001hxsMDr7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
