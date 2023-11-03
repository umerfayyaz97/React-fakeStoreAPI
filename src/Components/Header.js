import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";
import { Link, useSearchParams } from "react-router-dom";
import logo1 from "../img/logo1.png";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed  w-full z-10 transition-all `}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto ">
        <Link to={"/"}>
          <div>
            <img className="w-[40px] " src={logo1} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex cursor-pointer"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -botton-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
