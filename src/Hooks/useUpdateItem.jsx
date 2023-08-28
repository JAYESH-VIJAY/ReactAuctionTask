import { useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

function useUpdateItem() {
  const [error, setError] = useState(null);
  const db = getFirestore();

  const updateItem = async (itemId, updatedFields) => {
    try {
      const itemDocRef = doc(db, "items", itemId);
      await updateDoc(itemDocRef, updatedFields);
    } catch (error) {
      setError(error.message);
    }
  };

  return { updateItem, error };
}

export default useUpdateItem;
