import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function useFetchItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollectionRef = collection(db, "items");
        const querySnapshot = await getDocs(itemsCollectionRef);

        const fetchedItems = [];
        querySnapshot.forEach((doc) => {
          fetchedItems.push({ id: doc.id, ...doc.data() });
        });

        setItems(fetchedItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [db]);

  return { items, loading };
}

export default useFetchItems;
