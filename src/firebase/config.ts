import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "IHRE_API_KEY",
  authDomain: "fahrdienst-richter-6f9f5.firebaseapp.com",
  projectId: "fahrdienst-richter-6f9f5",
  storageBucket: "fahrdienst-richter-6f9f5.appspot.com",
  messagingSenderId: "IHRE_MESSAGING_ID",
  appId: "IHRE_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
