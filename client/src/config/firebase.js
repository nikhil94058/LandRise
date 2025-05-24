// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYEj87yFpcUKMn9TfRqoUJp-bbUvyRRWM",
  authDomain: "landsol-c7c63.firebaseapp.com",
  projectId: "landsol-c7c63",
  storageBucket: "landsol-c7c63.appspot.com",
  messagingSenderId: "27030876338",
  appId: "1:27030876338:web:9e70f0a488af216c9959ab",
  measurementId: "G-VQC7ES89D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);