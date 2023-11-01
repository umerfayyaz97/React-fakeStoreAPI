import React, { createContext, useState, useEffect, Children } from "react";

export const CartContext = createContext();

const CartProvidor = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    console.log(`${product.title}`);
    console.log(product);
  };

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvidor;
