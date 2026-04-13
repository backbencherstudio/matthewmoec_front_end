import React from "react";
import SimpleSteps from "./SimpleSteps";
import AfilliateLinks from "./AfilliateLinks";
import WhyCartForGood from "./WhyCartForGood";
import TakeEveryWhere from "@/app/components/clientComponents/homePage/TakeEveryWhere";

const HowItWorks = () => {
  return (

    <div>
      <div className=" h-[200] md:h-[230] lg:h-[292] bg-white overflow-hidden relative">
        <section className=" p-4 lg:p-0">
          <div className=" ">
            <p className="pt-8 md:pt-12 lg:pt-24.25 text-[#1A2A56] text-center font-inter text-[24px] md:text-[32px] lg:text-[52px] font-semibold leading-[120%] tracking-[0.26px] mb-1.5 lg:mb-4">
              How CartForGood Works.
            </p>

            <p className="text-[#1A2A56] text-center font-inter text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.09px]">
          
              Discover top brands, shop through trusted store links, and help fund
              real charity — at no extra cost to you.
            </p>

            <div className=" w-[130.537px] xl:w-[294.537px]  h-[180.934px] lg:h-[416.934px] rotate-[-80.577deg] rounded-[416.934px] bg-linear-to-b from-[#A1BAFF] to-[#FFF] blur-[50px] absolute -left-2 -bottom-38 overflow-hidden">  </div>
            <div className=" w-[130.537px] xl:w-[294.537px]  h-[180.934px] lg:h-[416.934px] rotate-[80.577deg] rounded-[416.934px] bg-linear-to-b from-[#A1BAFF] to-[#FFF] blur-[50px] absolute -right-1 -bottom-36 overflow-hidden">  </div>
          </div>


          
        </section>
      </div>

      <SimpleSteps></SimpleSteps>
      <AfilliateLinks></AfilliateLinks>
      <WhyCartForGood></WhyCartForGood>
      <TakeEveryWhere></TakeEveryWhere>

    </div>
  );
};

export default HowItWorks;
