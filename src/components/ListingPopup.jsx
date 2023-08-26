import { useState } from "react";
const ListingPopup = ({ onClose }) => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDateTime] = useState("");
  console.log(image);
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    // For example, you could send the data to a server or store it in state.
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
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
          <label className="block mb-2" htmlFor="date-time">
            Auction End Time
            <input
              type="datetime-local"
              id="date-time"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
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
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ListingPopup;
