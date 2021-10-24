import initializeFirebase from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in function
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //handle state function
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  },);

  // log out function
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

 
  // handle email function
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };

  // handle password function
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  // handle registration / login form
  const handleForm = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 character.");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must have at least one upper case");
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password )
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setError(error);
      });
  };


  // process login


  return {
    signInUsingGoogle,
    user,
    email,
    password,
    error,
    handleLogout,
    handleForm,
    handleEmail,
    handlePassword,
  };
};

export default useFirebase;
