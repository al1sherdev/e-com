import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBVUBZ8m039JcLBabdwpLN79rIxQOhk-v0",
  authDomain: "ecom-8cc35.firebaseapp.com",
  projectId: "ecom-8cc35",
  storageBucket: "ecom-8cc35.appspot.com",
  messagingSenderId: "627119072777",
  appId: "1:627119072777:web:44b084731ec01883d7bad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
