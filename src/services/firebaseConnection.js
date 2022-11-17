import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8UJ-bMLq4niBO9wLj3UyslBU3XemV3XI",
  authDomain: "linkinsta-68f7b.firebaseapp.com",
  projectId: "linkinsta-68f7b",
  storageBucket: "linkinsta-68f7b.appspot.com",
  messagingSenderId: "531114584981",
  appId: "1:531114584981:web:9f340e48a9ab47070fe49c",
  measurementId: "G-1JNM3GYSWZ"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };