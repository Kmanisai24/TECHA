// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD43ZDGsCH60z4IrjUpvCUm80wzZip1NZ0",
  authDomain: "mani-b10f0.firebaseapp.com",
  projectId: "mani-b10f0",
  storageBucket: "mani-b10f0.firebasestorage.app",
  messagingSenderId: "108485252001",
  appId: "1:108485252001:web:30179f57013bc6e5dff1e0",
  measurementId: "G-V3GF5F7ZXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };