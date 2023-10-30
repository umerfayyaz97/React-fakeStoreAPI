import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
const ProductProvidor = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (res.ok) {
          let data = await res.json();
          setProducts(data);
        } else {
          throw new Error("Connection Lost");
        }
      } catch (error) {
        throw new Error("Issue with API link");
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvidor;
