import React from "react";
import HeroImg from "../Assests/Hero.png";

const Hero = () => {
  return (
    <div className="h-[120vh] md:h-[100vh] mt-[50px] md:mt-[90px]">
      <div className="container mx-auto flex flex-col lg:flex-row flex-1 py-[100px] justify-center px-[50px] lg:px-[100px]">
        <div className="">
          <h1 className="lg:w-[90%] font-bold text-[50px] leading-[50px] mb-[40px]">
            Save your data storage here.
          </h1>
          <p className="lg:w-[50%] mb-9">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className="bg-[#9C69E2] rounded-3xl w-[110px] h-[38px]">Learn More</button>
        </div>

        <div className="">
          <img src={HeroImg} alt="" className="b bg-contain " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
