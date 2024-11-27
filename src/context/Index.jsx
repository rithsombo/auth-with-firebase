import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../FirebaseConfig";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      checkAuthState();
    };
  }, [user]);
  console.log(user);

  function registerWithFirebase() {
    const { email, password } = register;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithFirebase() {
    const { email, password } = login;
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleLogout() {
    return signOut(auth);
  }
  return (
    <AuthContext.Provider
      value={{
        register,
        setRegister,
        registerWithFirebase,
        loginWithFirebase,
        user,
        loading,
        login,
        setLogin,
        registerWithFirebase,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
