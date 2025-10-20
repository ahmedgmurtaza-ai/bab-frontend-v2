import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./routes";
import "./api/interceptors"; // Import interceptors to ensure they're registered
import "./style.css";
import "./i18n/i18n"; // Import i18next configuration

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
