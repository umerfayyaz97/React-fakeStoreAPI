// import React from "react";
// import hero1 from "../img/hero1.png";

// const Hero = () => {
//   return (
//     <section className=" bg-hero h-[800px] lg:h-[1100px] bg-no-repeat bg-cover bg-center ">
//       <div className="container flex justify-center h-full mx-16 lg:mx-28">
//         {/* text */}
//         <div className="flex flex-col justify-center">
//           {/* pretitle */}
//           <div className="flex items-center font-semibold uppercase ">
//             <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
//           </div>
//           {/* title */}
//           <h1 className="text-[70px] leading-[1.1] font-light mb-4">
//             AUTMN SALE STYLISH <br />
//             <span className="font-semibold ">WOMENS</span>
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import hero1 from "../img/hero1.png";

const Hero = () => {
  return (
    <section className="bg-hero h-[800px] bg-no-repeat bg-cover bg-center lg:h-[1100px] py-24">
      <div className="container flex justify-around h-full mx-auto ">
        {/* text */}
        <div className="flex flex-col justify-center lg:ml-80 ">
          {/* pretitle */}
          <div className="flex items-center font-semibold uppercase ">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <div className="text-[70px] leading-[1.1] font-light ">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold ">WOMENS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
