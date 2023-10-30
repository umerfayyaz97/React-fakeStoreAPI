import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEye } from "react-icons/bs";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;
