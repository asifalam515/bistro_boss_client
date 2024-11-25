import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User ", currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOutUser,
    updateUserProfile,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
