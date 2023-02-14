import React from "react";
import HeroImg from "../Assests/Hero.png";

const Hero = () => {
  return (
    <div className="h-full mt-[50px] md:mt-[150px] w-full">
      <div className="container mx-auto flex flex-col md:flex-row  py-[100px] justify-center px-[50px] lg:px-[100px]">
        <div className="w-full">
          <h1 className="font-bold text-[40px] leading-[50px] mb-[40px]">
            Get your data <br /> storage here.
          </h1>
          <p className="lg:w-[50%] mb-9">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className="bg-[#9C69E2] rounded-3xl w-[110px] h-[38px] hover:bg-purple-400">Learn More</button>
        </div>

        <div className="mt-10 md:mt-0">
          <img src={HeroImg} alt="" className="bg-contain " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
