import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContextProvider = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // const currentEmail = {
        //   email: currentUser.email,
        // };
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((response) => {
            // console.log(response);
            localStorage.setItem("access-token", response.data.token);
          });
        // fetch("http://localhost:5000/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(currentEmail),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     //console.log(data);
        //     localStorage.setItem("Access-token", data.token);
        //   });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createRegister,
    userLogin,
    loading,
    logOut,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
