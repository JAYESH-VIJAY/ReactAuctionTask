/*eslint-disable*/
import { createContext, useState } from "react";
import Home from "./Pages/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
export const AuthContext = createContext();
export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {/* //   {!login ? <SignUp /> : <SignIn />} */}
      <Home />
    </AuthContext.Provider>
  );
}
