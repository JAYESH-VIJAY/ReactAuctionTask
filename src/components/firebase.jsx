import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATkNK0H_XrwZur_eBg4Op7OfO2zLA2dCk",
  authDomain: "react-aution-project.firebaseapp.com",
  projectId: "react-aution-project",
  storageBucket: "react-aution-project.appspot.com",  
  messagingSenderId: "1071268192053",
  appId: "1:1071268192053:web:ba8a84c7802ce8a269f67c",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);
export { app };
export { storage };
