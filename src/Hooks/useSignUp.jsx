//****************** only for email passwork sign up (not a good practice) ******************

// import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// function useSignUp() {
//   const [error, setError] = useState(null);
//   const auth = getAuth();

//   const signUp = async (email, password) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       return res.user;
//     } catch (error) {
//       setError(error.message);
//       return null;
//     }
//   };

//   return { signUp, error };
// }

// export default useSignUp;

//****************** email verifiaction link send on email ******************
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

function useSignUp() {
  const [error, setError] = useState(null);
  const auth = getAuth();

  const signUp = async (email, password, onSuccess) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(res.user); // Send verification email
      onSuccess();
    } catch (error) {
      setError(error.message);
    }
  };

  return { signUp, error };
}

export default useSignUp;
