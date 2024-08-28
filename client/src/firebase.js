import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZQN9Hwvldw5UsT73M1idi3SHV2t8VWIE",
  authDomain: "chat-app-ee64d.firebaseapp.com",
  projectId: "chat-app-ee64d",
  storageBucket: "chat-app-ee64d.appspot.com",
  messagingSenderId: "279542197292",
  appId: "1:279542197292:web:4b20b5e12e19a07b607589",
  measurementId: "G-WFVPSNWEKP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
