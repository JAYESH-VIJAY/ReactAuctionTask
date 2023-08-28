import { useState } from "react";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

function useAddItem() {
  const [error, setError] = useState(null);
  const db = getFirestore();

  const addItem = async (itemData) => {
    try {
      // Generate a unique timestamp-based ID
      const timestampId = new Date().getTime().toString();

      const itemsCollectionRef = doc(db, "items", timestampId);
      await setDoc(itemsCollectionRef, {
        ...itemData,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return { addItem, error };
}

export default useAddItem;
