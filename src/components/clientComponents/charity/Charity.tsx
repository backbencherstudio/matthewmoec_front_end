import React from 'react';
import SimpleCalender from './SimpleCalender';
import TakeEveryWhere from "@/app/components/clientComponents/homePage/TakeEveryWhere";

const Charity = () => {
    return (
        <div>
                  <div className=" lg:h-105 bg-white overflow-hidden relative">
        <section className=" p-4 lg:p-0">
          <div className=" ">
            <p className=" lg:pt-[97px] text-[#1A2A56] text-center font-inter text-[24px] md:text-[32px] lg:text-[52px] font-semibold leading-[120%] tracking-[0.26px] mb-1.5 lg:mb-4">
              Charity Calendar
            </p>

            <p className="text-[#1A2A56] text-center font-inter text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.09px]">
          
              Every confirmed donation is posted here publicly. No vague estimates — real numbers, real receipts.
            </p>

            <div className=" w-[130.537px] lg:w-[294.537px]  h-[180.934px] lg:h-[416.934px] rotate-[-80.577deg] rounded-[416.934px] bg-linear-to-b from-[#A1BAFF] to-[#FFF] blur-[50px] absolute left-0 -bottom-22 overflow-hidden">  </div>
            <div className=" w-[130.537px] lg:w-[294.537px]  h-[180.934px] lg:h-[416.934px] rotate-[80.577deg] rounded-[416.934px] bg-linear-to-b from-[#A1BAFF] to-[#FFF] blur-[50px] absolute right-0 -bottom-22 overflow-hidden">  </div>
          </div>


          
        </section>
      </div>

      <SimpleCalender></SimpleCalender>
      <TakeEveryWhere></TakeEveryWhere>
        </div>
    );
};

export default Charity;