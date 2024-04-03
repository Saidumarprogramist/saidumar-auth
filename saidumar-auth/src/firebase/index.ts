import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB573fSc7AJP2BkjnToNyVfdgVl1fKINg0",
  authDomain: "saidumar-auth.firebaseapp.com",
  projectId: "saidumar-auth",
  storageBucket: "saidumar-auth.appspot.com",
  messagingSenderId: "18767450494",
  appId: "1:18767450494:web:32817e4574e2956843e32f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
