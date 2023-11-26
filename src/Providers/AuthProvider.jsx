import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { removeToken } from "../utils/userAuth";

export const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoadung] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoadung(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = async() => {
    setLoadung(true);
    await removeToken()
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadung(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userUpdate,
    loginUser,
    googleLogin,
    logOutUser,
  };
  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
