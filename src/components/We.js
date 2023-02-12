import React from "react";
import image2 from "../Assests/image2.png";

const We = () => {
  return (
    <div className="h-[100vh] px-3">
      <div className="flex flex-col md:flex-row items-center justify-around flex-1 container mx-auto bg-[#F063B826] min-w-[70%] mx-auto h-[70vh] rounded-3xl">
        <div className="">
          <img className="h-[300px]" src={image2} alt="" />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <h1 className=" text-[30px] md:text-[40px] font-bold leading-none mb-8">We are a high-level data storage bank</h1>
          <p>
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default We;
