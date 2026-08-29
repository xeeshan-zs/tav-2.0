import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Catch uncaught errors that escape React (e.g. Framer Motion internals)
window.addEventListener("error", (event) => {
  console.error("[GlobalError]", event.error ?? event.message);
  // Prevent the error from crashing the entire page
  event.preventDefault();
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("[UnhandledRejection]", event.reason);
  event.preventDefault();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
