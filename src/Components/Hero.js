import React from "react";

const Hero = () => {
  return (
    <section className=" bg-hero h-[800px] lg:h-[1100px] bg-no-repeat bg-cover bg-center ">
      <div className="container flex justify-center h-full mx-16 lg:mx-28">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="flex items-center font-semibold uppercase ">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTMN SALE STYLISH <br />
            <span className="font-semibold ">WOMENS</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
