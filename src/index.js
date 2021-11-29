import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

ReactDOM.render(
  <React.StrictMode>
    <CatalogueProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CatalogueProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
