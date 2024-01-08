// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-WgfAq45rMGvv1sYb7QbRZGvtl1r-SQs",
  authDomain: "matchmaking-ip.firebaseapp.com",
  projectId: "matchmaking-ip",
  storageBucket: "matchmaking-ip.appspot.com",
  messagingSenderId: "562949910276",
  appId: "1:562949910276:web:981a0370c015253d972a51",
  measurementId: "G-NKB7EH8LVB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);