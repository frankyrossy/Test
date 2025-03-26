import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ... deine Firebase-Konfiguration
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);