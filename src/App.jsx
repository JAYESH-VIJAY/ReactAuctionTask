import { useState, useEffect, useRef, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./Pages/Home";
// Create a context for the ref
export const RefContext = createContext();

function App() {
  const [user, setUser] = useState(null); // User state

  const yourListingRef = useRef(null);
  const scrollToYourListing = () => {
    yourListingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const auth = getAuth();
  useEffect(() => {
    // Set up the auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // Clean up the listener when component unmounts
    return () => {
      unsubscribe();
    };
  }, [auth]);
  console.log(user);
  return (
    <RefContext.Provider value={{ yourListingRef, scrollToYourListing }}>
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <SignIn />}
          />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </RefContext.Provider>
  );
}

export default App;
