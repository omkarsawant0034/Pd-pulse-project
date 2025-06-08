// Import only required Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhziJ0CZnokqwPb4pBzEFBfhlz65gKkJM",
  authDomain: "pd-pulse.firebaseapp.com",
  projectId: "pd-pulse",
  storageBucket: "pd-pulse.firebasestorage.app",
  messagingSenderId: "1074237793614",
  appId: "1:1074237793614:web:09330bd88a1c55bfee6a1f",
  measurementId: "G-EK652LWPFF" // optional — okay to leave as is
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const auth = getAuth(app);
