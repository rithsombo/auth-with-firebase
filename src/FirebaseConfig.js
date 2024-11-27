import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWKOvt1enzmGNrvusv5IkFFFeq0QAtLHM",
  authDomain: "react-firebase-auth-f6e78.firebaseapp.com",
  projectId: "react-firebase-auth-f6e78",
  storageBucket: "react-firebase-auth-f6e78.firebasestorage.app",
  messagingSenderId: "590168450738",
  appId: "1:590168450738:web:3e1ba32c7e15ae18aecbab",
  measurementId: "G-Q3QZCE7WTB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

