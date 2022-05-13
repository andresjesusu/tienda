// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7s3IBbBzZ2hIZiVJ-Lm7jf0jDf9tBfcc",
  authDomain: "afk-store.firebaseapp.com",
  projectId: "afk-store",
  storageBucket: "afk-store.appspot.com",
  messagingSenderId: "1072802977747",
  appId: "1:1072802977747:web:0f21efe91e24ae7bd94126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
