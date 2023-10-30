import React, { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>Open/Close</div>
    </div>
  );
};

export default Header;
