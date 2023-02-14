import React from "react";
import { featuresData } from "../Data";


const Features = () => {
  return (
    <div className="h-full mb-10" >
      <div className="container mx-auto">
        <div>
          <h1 className="text-center text-[32px] md:text-[40px] font-bold text-3xl mb-8">Features</h1>
          <p className="text-center px-[5%] lg:px-[20%] xl:px-[30%] mb-14">
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        {featuresData.map((feature)=>(
                    
        <div className="mx-auto flex items-center justify-center">
          <div style={{backgroundColor: feature.bgColor}} className='bg-opacity-20 w-[360px] md:w-[400px] h-[240px] flex gap-4 pr-4 rounded-3xl'>
            <div className="flex items-center justify-center">
              <img className="" src={feature.image} alt="" />
            </div>
            <div className="w-[60%]">
              <h1 className="font-bold my-4">{feature.text1}</h1>
              <p className="text-[13px]">
                {feature.text2}
              </p>
              <p className="font-bold my-4">Learn more</p>
            </div>
          </div>
        </div>
                    ))}
                    </div>
      </div>
    </div>
  );
};

export default Features;
