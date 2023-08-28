import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

function useLogout() {
  const [error, setError] = useState(null);
  const auth = getAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      // Any additional logic you want to execute after logout
    } catch (error) {
      setError(error.message);
    }
  };

  return { logout, error };
}

export default useLogout;
