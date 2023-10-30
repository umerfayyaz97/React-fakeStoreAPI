import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvidor from "./Context/ProductContext";
import SidebarProvidor from "./Context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvidor>
    <ProductProvidor>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvidor>
  </SidebarProvidor>
);
