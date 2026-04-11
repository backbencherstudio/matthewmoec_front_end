import React from "react";
import PointerIcon from "../../icons/PointerIcon";

const WhyPeopleUse = () => {
  return (
    <div className="relative">
      <section
        className="flex flex-col justify-center items-center gap-12 self-stretch p-[100px_0] bg-[#F0F3F9] -z-2 
  sm:p-[50px_0] sm:gap-6  md:p-[75px_0] md:gap-9 relative"
      >
        <div >
          <h1
            className="text-center text-[#1A2A56] text-[40px] font-semibold leading-[124%] tracking-[0.2px] font-inter 
  sm:text-[32px] sm:leading-9.5 sm:text-[#1A2A56] md:text-[36px] md:leading-11  mb-4 "
          >
            Why people use CartForGood
          </h1>

          <p
            className="text-center text-[#4A4C56] text-[18px] font-normal leading-[132%] tracking-[0.09px] font-inter 
  sm:text-[16px] sm:leading-5 sm:text-[#4A4C56] md:text-[17px] md:leading-5.5"
          >
            Even the smallest steps can add up to create a powerful and positive
            impact over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">

          <div className="flex flex-col gap-4 justify-center items-center h-full">
            <div className="flex  items-center gap-4 p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-[8px] bg-[#E6EFFF]"><PointerIcon></PointerIcon></div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                100% free to use
              </h1>
            </div>

                       <div className="flex  items-center gap-4 p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-[8px] bg-[#E6EFFF]"><PointerIcon></PointerIcon></div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
               Works on all devices
              </h1>
            </div>

                       <div className="flex  items-center gap-4 p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-[8px] bg-[#E6EFFF]"><PointerIcon></PointerIcon></div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
               Accessible for all ages
              </h1>
            </div>
          </div>

          <div className="relative">
            <img src="/mobile.png" alt=""  className=""/>
           
                <div className="absolute -bottom-2 ml-4 -z-1 w-[286px] h-[67px] rounded-[286px] bg-gradient-to-b from-[#395CBC] to-[#1A2A56] filter blur-[36.2px]"></div>

         
          </div>

          <div >
           
            <div className="flex flex-col gap-4 justify-center h-full">
                          <div className="flex  items-center gap-4 p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-[8px] bg-[#E6EFFF]"><PointerIcon></PointerIcon></div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
               No ads or tracking
              </h1>
            </div>

                          <div className="flex  items-center gap-4 p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-[8px] bg-[#E6EFFF]"><PointerIcon></PointerIcon></div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                Supports charities monthly
              </h1>
            </div>

                          <div className="flex  items-center gap-4 p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-[8px] bg-[#E6EFFF]"><PointerIcon></PointerIcon></div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                Supports monthly charity donations
              </h1>
            </div>
            </div>
          </div>


        </div>

      </section>
    </div>
  );
};

export default WhyPeopleUse;
