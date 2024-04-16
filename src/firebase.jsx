import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCupowt0dwOO79qSr3dWfScd1ZmwzmSpeQ",

  authDomain: "disneyplus-7d1d0.firebaseapp.com",

  projectId: "disneyplus-7d1d0",

  storageBucket: "disneyplus-7d1d0.appspot.com",

  messagingSenderId: "968286701383",

  appId: "1:968286701383:web:9ecdbdc52cda6d91caee62",

  measurementId: "G-6RBQED6T5H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);

export default db;