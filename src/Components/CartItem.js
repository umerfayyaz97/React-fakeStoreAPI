import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const CartItem = ({ item }) => {
  const { title, id, image, amount, price } = item;

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        <Link to={`/products/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div>
          <div>
            <Link to={`/products/${id}`}>{title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
