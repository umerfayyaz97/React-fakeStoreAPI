import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { title, id, image, amount, price } = item;
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex w-full py-2 font-light text-gray-500 border-b lg:px-6 gap-x-4 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        <Link to={`/products/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            {/* link */}
            <Link
              to={`/products/${id}`}
              className="text-sm font-medium max-w-[240px] uppercase text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex max-w-[100px] items-center h-full border text-primary font-medium  flex-1 ">
              <div className="flex items-center justify-center flex-1 h-full cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="flex items-center justify-center h-full px-2">
                {amount}
              </div>
              <div className="flex items-center justify-center flex-1 h-full cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex items-center justify-around flex-1">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex items-center justify-end flex-1 font-medium text-primary">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
