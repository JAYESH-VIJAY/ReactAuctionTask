import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function useSignIn() {
  const [error, setError] = useState(null);
  const auth = getAuth();

  const signIn = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  return { signIn, error };
}

export default useSignIn;
