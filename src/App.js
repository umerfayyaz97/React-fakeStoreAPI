import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
// import Sidebar from "./Pages/Components/Sidebar";
import Footer from "./Components/Footer";
import SideBar from "./Pages/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <SideBar />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
