import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="flex items-center justify-center h-screen font-semibold">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="flex items-center h-screen pt-32 pb-12 lg:py-32">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col items-center lg:flex-row">
          {/* image */}
          <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="mb-6 text-xl font-medium text-red-500">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="px-8 py-4 text-white bg-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
