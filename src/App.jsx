import { createContext, useState } from "react";
import Home from "./Pages/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { useRef } from "react";

export const RefContext = createContext();
export default function App() {
  const [showHome, setShowHome] = useState(false);
  const yourListingRef = useRef(null); // Create a ref for the footer component
  const scrollToYourListing = () => {
    yourListingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [login, setLogin] = useState(false);
  return (
    <RefContext.Provider value={{ yourListingRef, scrollToYourListing }}>
      {!login && !showHome && (
        <SignUp
          login={login}
          setLogin={setLogin}
          showHome={showHome}
          setShowHome={setShowHome}
        />
      )}
      {login && !showHome && (
        <SignIn
          login={login}
          setLogin={setLogin}
          showHome={showHome}
          setShowHome={setShowHome}
        />
      )}
      {showHome && <Home setShowHome={setShowHome} />}
      {console.log(showHome)}
    </RefContext.Provider>
  );
}
