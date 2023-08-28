import { useState } from "react";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

function useDeleteItem() {
  const [error, setError] = useState(null);
  const db = getFirestore();

  const deleteItem = async (itemId) => {
    try {
      const itemDocRef = doc(db, "items", itemId);
      await deleteDoc(itemDocRef);
    } catch (error) {
      setError(error.message);
    }
  };

  return { deleteItem, error };
}

export default useDeleteItem;
