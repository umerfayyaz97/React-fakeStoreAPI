import React, { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex cursor-pointer"
      >
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
