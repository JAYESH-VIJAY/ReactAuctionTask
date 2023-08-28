import { useState, useEffect } from "react";
import storage from "../components/firebase"; // Import the initialized Firebase Storage instance

function useImageUrls() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Reference to the folder containing images in Firebase Storage
    const imagesRef = storage.ref().child("images");

    // List all images in the folder
    imagesRef
      .listAll()
      .then((res) => {
        const urls = [];
        res.items.forEach((item) => {
          item.getDownloadURL().then((url) => {
            urls.push(url);
          });
        });
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);

  return imageUrls;
}

export default useImageUrls;
