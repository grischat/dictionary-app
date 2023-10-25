import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FontProvider } from "../Components/Context/FontContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FontProvider>
      <App />
    </FontProvider>
  </React.StrictMode>
);
