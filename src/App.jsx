/*eslint-disable*/
import { createContext, useState } from "react";
import Home from "./Pages/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ButtonPopup from "./components/ButtonPopup";
import ListYourAuction from "./components/auction/ListYourAuction";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import ImageUpload from "./components/ImageUpload/ImageUpload";
export const AuthContext = createContext();
export default function App() {
  const [login, setLogin] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {/* //   {!login ? <SignUp /> : <SignIn />} */}
      {/* <Home /> */}
      {/* <ButtonPopup/> */}
      {/* <ListYourAuction/> */}
      {/* <div className="min-h-screen flex justify-center items-center">
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md"
          onClick={openPopup}
        >
          List Your Item
        </button>
        {isPopupOpen && <ListingPopup onClose={closePopup} />}
      </div> */}
      {/* <NavBar/> */}
      <Profile />
      <ImageUpload />
    </AuthContext.Provider>
  );
}
