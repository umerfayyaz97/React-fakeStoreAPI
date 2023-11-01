import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../Components/CartItem";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm font-semibold uppercase">Shopping Bag (0)</div>
        <div
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.div} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
