import { useState } from "react";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Import your Firebase configuration

function useAddItemPhoto() {
  const [error, setError] = useState(null);

  const addItemPhoto = async (itemId, file) => {
    try {
      const storageRef = ref(storage, `item-photos/${itemId}`);
      await uploadString(storageRef, file, "data_url");
      const downloadURL = await getDownloadURL(storageRef);
      // Update the item's photo URL in the Firestore collection
      // You'll need to implement this part yourself
    } catch (error) {
      setError(error.message);
    }
  };

  return { addItemPhoto, error };
}

export default useAddItemPhoto;
