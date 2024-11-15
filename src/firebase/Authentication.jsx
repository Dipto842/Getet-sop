import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export const Authcontes = createContext(null);

// eslint-disable-next-line react/prop-types
const Authprovedar = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setuser] = useState("");

  // google

  const signInWithPopu = () => {
    return signInWithPopup(auth, provider);
  };

  // rejestar

  const singup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logen

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubcbe = onAuthStateChanged(auth, (carentusar) => {
      setuser(carentusar);
      console.log("ami tumak valo basi", carentusar);
    });
    return () => {
      unSubcbe();
    };
  }, []);

  const userinfo = {
    signInWithPopu,
    singup,
    singIn,
    user,
  };
  return (
    <div>
      <Authcontes.Provider value={userinfo}>{children}</Authcontes.Provider>
    </div>
  );
};

export default Authprovedar;
