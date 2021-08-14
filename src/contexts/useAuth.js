import React, { useContext, createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const AuthContext = createContext();

function AuthValue() {
  // const { onPost: loginUser }
  // const [isAuth, setIsAuth] = useState(!!localStorage.getItem(TOKEN_NAME));
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const login = async (auth) => {
    setIsAuth(true);
    setCurrentUser(auth.user);
    let userExisted = false;
    const users = db.collection("users_table");

    users.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email === auth.user.email) {
          userExisted = true;
        }
      });
    });

    if (!userExisted) {
      users.add({
        username: auth.user.displayName,
        email: auth.user.email,
        method: "google sign in",
        date: new Date()
      });
    }
  };

  useEffect(() => {}, [isAuth]);

  return {
    isAuth,
    login,
    currentUser,
  };
}

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={AuthValue()}>{children}</AuthContext.Provider>
  );
}
