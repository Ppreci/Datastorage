import React from "react";
import image3 from "../Assests/image3.png";
import { featuresData } from "../Data";


const Features = () => {
  return (
    <div className="lg:h-[120vh] h-[200vh]" >
      <div className="container mx-auto">
        <div>
          <h1 className="text-center font-bold text-3xl mb-8">Features</h1>
          <p className="text-center px-[5%] lg:px-[20%] xl:px-[30%] mb-14">
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 p place-items-center">
        {featuresData.map(feature=>(
                    
        <div className="mx-auto flex items-center justify-center">
          <div className={`bg-[${feature.bgColor}] bg-opacity-20 w-[380px] h-[240px] flex gap-4 pr-4 rounded-3xl`}>
            <div className="flex items-center justify-center">
              <img className="" src={feature.image} alt="" />
            </div>
            <div className="w-[50%]">
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
