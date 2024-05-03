import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-clone-91d14.firebaseapp.com",
  projectId: "netflix-clone-91d14",
  storageBucket: "netflix-clone-91d14.appspot.com",
  messagingSenderId: "753354870740",
  appId: "1:753354870740:web:cdf1874d43b13141495041",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    toast.error(
      error.code.split("/")[1].split("-").join(" ").charAt(0).toUpperCase() +
        error.code.split("/")[1].split("-").join(" ").slice(1)
    );
  }
};

const signin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(
      error.code.split("/")[1].split("-").join(" ").charAt(0).toUpperCase() +
        error.code.split("/")[1].split("-").join(" ").slice(1)
    );
  }
};

const signout = async () => {
  signOut(auth);
};

export { auth, db, signup, signin, signout };
