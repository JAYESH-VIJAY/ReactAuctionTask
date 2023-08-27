import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/upload-image": "http://localhost:5173/upload-image", // Adjust the URL to match your backend server
  //   },
  // },
});
