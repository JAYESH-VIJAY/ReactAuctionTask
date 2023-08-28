import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import your Firebase configuration

function useUpdateCurrentBid() {
  const [error, setError] = useState(null);

  const updateCurrentBid = async (itemId, newBid) => {
    try {
      const itemRef = doc(db, "items", itemId);
      await updateDoc(itemRef, { curBid: newBid });
    } catch (error) {
      setError(error.message);
    }
  };

  return { updateCurrentBid, error };
}

export default useUpdateCurrentBid;
