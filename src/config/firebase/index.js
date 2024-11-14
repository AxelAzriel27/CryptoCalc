import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqiSK-dFvAupyo2QLQCGnCvBDAtwKbgFA",
  authDomain: "cryptocalc-be9c0.firebaseapp.com",
  databaseURL:
    "https://cryptocalc-be9c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cryptocalc-be9c0",
  storageBucket: "cryptocalc-be9c0.firebasestorage.app",
  messagingSenderId: "460461886449",
  appId: "1:460461886449:web:4a1cf6000be9d233cd1250",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
