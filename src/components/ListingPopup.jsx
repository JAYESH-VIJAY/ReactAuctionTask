import { useState } from "react";
import { storage } from "./firebase";
import SpinnerPopup from "./SpinnerPopup";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function ListingPopup({ setShowModal, setYourAuctions }) {
  // console.log(Images);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      setShowLoader(true);
      const storageRef = ref(storage, image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // setNewImageUrl(downloadURL);
            setYourAuctions((prevAuctions) => [
              ...prevAuctions,
              {
                image: downloadURL,
                category: category,
                minBid: price + "$",
              },
            ]);
            setShowLoader(false);
          });
        }
      );
    } else {
      console.log("No image selected.");
    }

    setShowModal(false);
  };
  return (
    <div className="Modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      {showLoader ? (
        <SpinnerPopup />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">List Your Item</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2" htmlFor="item-name">
              Item Name
              <input
                type="text"
                id="item-name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </label>
            <label className="block mb-2" htmlFor="category">
              Category
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </label>
            <label className="block mb-2" htmlFor="price">
              Price
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </label>
            <label className="block mb-2" htmlFor="image">
              Image Upload
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
          <button
            className="mt-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
