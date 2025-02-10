// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdDLXV2wtIHthxq63cGqcwFP5mZ_VXQ1g",
  authDomain: "website-d40d6.firebaseapp.com",
  projectId: "website-d40d6",
  storageBucket: "website-d40d6.firebasestorage.app",
  messagingSenderId: "108939969443",
  appId: "1:108939969443:web:b3c2eb8e8caf09cf731016"
};


// Your web app's Firebase configuration
const firebaseConfigk = {
  apiKey: "AIzaSyDAQVliBL_6zfck4lEIwh8llKm73dKlseI",
  authDomain: "ags-website-dc96a.firebaseapp.com",
  projectId: "ags-website-dc96a",
  storageBucket: "ags-website-dc96a.appspot.com", // Fixed typo: .app -> .appspot.com
  messagingSenderId: "366485809791",
  appId: "1:366485809791:web:4aec115ceb934aa06d2d4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth
const db = getFirestore(app); // Initialize Firestore
const usersCollection = collection(db, "customers");

// Export Firebase instances for use in other files
export const initFirebase = () => {
  return app;
};

export { auth, db, collection }; // Export `auth` and `db` for use in other files
