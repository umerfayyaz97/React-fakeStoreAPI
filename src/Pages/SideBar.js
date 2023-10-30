import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../Components/CartItem";
import { SidebarContext } from "../Context/SidebarContext";

const SideBar = () => {
  const { isOpen, handleOpen } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      SideBar
    </div>
  );
};

export default SideBar;
