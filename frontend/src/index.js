import React from "react";
import "./index.css";
import App from "./App";
import Modal from "react-modal";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
