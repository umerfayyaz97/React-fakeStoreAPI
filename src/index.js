import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvidor from "./Context/ProductContext";
import SidebarProvidor from "./Context/SidebarContext";
import CartProvidor from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvidor>
    <CartProvidor>
      <ProductProvidor>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvidor>
    </CartProvidor>
  </SidebarProvidor>
);
