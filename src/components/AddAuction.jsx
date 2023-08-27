import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageUpload from "./ImageUpload/ImageUpload";
import { useState } from "react";
function Modal({ setPopUp }) {
  //eslint-disable-next-line
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    auctionPrice: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any validation or data processing here before submitting

    // Example: Submit the form data to an API or perform an action
    console.log("Form data submitted:", formData);

    // Close the modal
    setPopUp(false);
  };

  //  const handleInputChange = (event) => {
  //    const { name, value } = event.target;
  //    setFormData({
  //      ...formData,
  //      [name]: value,
  //    });
  //  };
  return (
    <div className="Modal w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center">
      <div className="bg-white p-10 rounded-md shadow-md">
        <h1 className="font-bold text-center text-lg my-3">Add Auction</h1>
        <h1 className="font-bold text-center text-sm ">
          **Place heighest bid amount from current bid to make this product
          yours**
        </h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="ItemName"
                  name="ItemName"
                  required
                  fullWidth
                  id="ItemName"
                  label="Item Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Auctioncatagory"
                  label="Category"
                  name="Category"
                  autoComplete="Category"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="AuctionPrice"
                  label="Auction Price"
                  name="AuctionPrice"
                  autoComplete="AuctionPrice"
                />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <div className="flex justify-between mt-5">
          <button
            className="outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black"
            onClick={() => setPopUp(false)}
          >
            No, Cancel
          </button>
          <button
            className="outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black"
            onClick={() => console.log("Please like and subscribe")}
          >
            Yes, Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
