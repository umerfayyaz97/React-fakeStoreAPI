import React, { createContext, useState, useEffect, Children } from "react";

export const CartContext = createContext();

const CartProvidor = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //check for items in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(product);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //   console.log(cart);

  const removeFromCart = (id) => {
    const newCart = cart.filter((x) => {
      return x.id !== id;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvidor;
