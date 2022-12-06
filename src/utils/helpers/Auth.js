import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.utils";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("null");

  useEffect(() => {
    console.log(auth.onAuthStateChanged(setCurrentUser));
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
