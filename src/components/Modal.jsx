import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Modal({ setPopUp, Images, curIndex, offerBid, setOfferBid }) {
  const handleSubmit = () => {
    // You can perform any validation or data processing here before submitting
    setOfferBid(offerBid + "$");
    // Example: Submit the form data to an API or perform an action
    console.log("Form data submitted:");
    // Close the modal
    setPopUp(false);
  };

  return (
    <div className="Modal w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center">
      <div className="bg-white p-10 rounded-md shadow-md">
        <h1 className="font-bold text-center text-lg my-3">Place Bid</h1>
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
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="ItemCategory"
                  name="ItemCategory"
                  required
                  fullWidth
                  id="ItemCategory"
                  label="Item Category"
                  value={Images[curIndex].category}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="CurrentBid"
                  label="Current Bid"
                  name="Current Bid"
                  autoComplete="CurrentBid"
                  value={offerBid ? offerBid : Images[curIndex].minBid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="OfferBid"
                  label="Your Bid"
                  name="OfferBid"
                  autoComplete="OfferBid"
                  value={offerBid}
                  onChange={(e) => setOfferBid(e.target.value)}
                />
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
            onClick={() => handleSubmit()}
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
