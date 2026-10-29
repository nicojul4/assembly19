import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CampusTour from "./CampusTour.jsx";
import "../styles.css";

const page = window.location.pathname.startsWith("/campus-tour") ||
  window.location.hash === "#campus-tour" ||
  new URLSearchParams(window.location.search).get("view") === "campus-tour" ? (
  <CampusTour />
) : (
  <App />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {page}
  </StrictMode>,
);
