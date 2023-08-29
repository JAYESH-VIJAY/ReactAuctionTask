// import { useState } from "react";
// import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

// function useAddItem() {
//   const [error, setError] = useState(null);
//   const db = getFirestore();

//   const addItem = async (itemData) => {
//     try {
//       // Generate a unique timestamp-based ID
//       const timestampId = new Date().getTime().toString();

//       const itemsCollectionRef = doc(db, "items", timestampId);
//       await setDoc(itemsCollectionRef, {
//         ...itemData,
//         timestamp: serverTimestamp(),
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return { addItem, error };
// }

// export default useAddItem;

import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  storage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  // ... your other imports
} from "firebase/storage";

function useAddItem() {
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const addItem = async (itemData, image) => {
    const db = getFirestore(); // Get the Firestore instance

    try {
      setShowLoader(true);

      // Add the item to the "items" collection
      const docRef = await addDoc(collection(db, "items"), itemData);

      // Upload the image to Firebase Storage
      if (image) {
        const storageRef = storageRef(storage, `itemImages/${docRef.id}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed"
          // ... progress and error handling
        );

        uploadTask.then(async () => {
          const imageUrl = await getDownloadURL(storageRef);
          setShowLoader(false);
          return imageUrl;
        });
      }
    } catch (error) {
      setError(error.message);
      setShowLoader(false);
    }
  };

  return { addItem, error, showLoader };
}

export default useAddItem;
