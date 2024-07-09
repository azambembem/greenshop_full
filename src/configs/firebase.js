import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUww7K7XugwJtTZlNKD9z7FouRTftDtyU",
  authDomain: "auth-intensive-g1-f077e.firebaseapp.com",
  projectId: "auth-intensive-g1-f077e",
  storageBucket: "auth-intensive-g1-f077e.appspot.com",
  messagingSenderId: "465631374299",
  appId: "1:465631374299:web:ea302b159d69fb481a15fe",
  measurementId: "G-NMBTV9W022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
