import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/Data";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <DataProvider>
    <App />
  </DataProvider>
);
