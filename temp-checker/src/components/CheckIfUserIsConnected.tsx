import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseAuth from "../services/firebaseAuth";
import { CheckIfUserIsConnectedType } from "../utils/types";
import { Navigate } from "react-router-dom";

const CheckIfUserIsConnected: React.FC<CheckIfUserIsConnectedType> = (
  props
) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unscribe = onAuthStateChanged(FirebaseAuth.auth, (user) => {
      setUser(user);
    });

    return () => unscribe();
  }, []);

  return user ? props.element : <Navigate to="/login" />;
};

export default CheckIfUserIsConnected;
