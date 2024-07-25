import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcZljYGP0jr3__FojkaSh5tfWj59qiNPE",
  authDomain: "chat-with-pdf-challenge-325a3.firebaseapp.com",
  projectId: "chat-with-pdf-challenge-325a3",
  storageBucket: "chat-with-pdf-challenge-325a3.appspot.com",
  messagingSenderId: "1030241551311",
  appId: "1:1030241551311:web:9cbba69813b776dbeb48ba",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
