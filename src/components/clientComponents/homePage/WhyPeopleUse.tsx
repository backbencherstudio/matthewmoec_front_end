import PointerIcon from "@/components/icons/PointerIcon";
import Image from "next/image";

const WhyPeopleUse = () => {
  return (
    <div className="relative ">
      <section
        className="flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-12 py-8 md:p-[75px_0] lg:p-[100px_0] bg-[#F0F3F9] -z-2 
  sm:p-[50px_0] sm:gap-6    relative  px-4 lg:px-0  "
      >
        <div>
          <h1
            className="text-center text-[#1A2A56] text-[1.5rem] md:text-[40px] font-semibold leading-[124%] tracking-[0.2px] font-inter 
  sm:text-[32px] sm:leading-9.5 sm:text-[#1A2A56]  md:leading-11 mb-2 lg:mb-4 "
          >
            Why people use CartForGood
          </h1>

          <p
            className="text-center text-[#4A4C56] text-[18px] font-normal leading-[132%] tracking-[0.09px] font-inter 
  sm:text-[16px] sm:leading-5 sm:text-[#4A4C56] md:text-[17px] md:leading-5.5 p-0 sm:p-4"
          >
            Even the smallest steps can add up to create a powerful and positive
            impact over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center lg:justify-between items-center ">
          <div className="flex flex-col gap-4 justify-center items-center h-full">
            <div className="flex  items-center gap-4 p-2 md:p-4 lg:p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-11 h-11 p-2.5 justify-center items-center rounded-[8px] bg-[#E6EFFF]">
                <PointerIcon></PointerIcon>
              </div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                100% free to use
              </h1>
            </div>

            <div className="flex  items-center gap-4 p-2 md:p-4 lg:p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-11 h-11 p-2.5 justify-center items-center rounded-[8px] bg-[#E6EFFF]">
                <PointerIcon></PointerIcon>
              </div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                Works on all devices
              </h1>
            </div>

            <div className="flex  items-center gap-4 p-2 md:p-4 lg:p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-11 h-11 p-2.5 justify-center items-center rounded-[8px] bg-[#E6EFFF]">
                <PointerIcon></PointerIcon>
              </div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                Accessible for all ages
              </h1>
            </div>
          </div>

          <div className="relative py:4 lg:py-0">
            <Image
              src="/mobile.png"
              height={400}
              width={400}
              alt="mobile"
              className="object-cover"
            />

            <div className="absolute bottom-6  lg:-bottom-2 ml-4 -z-1 w-71.5 h-16.75 rounded-[286px] bg-linear-to-b from-[#395CBC] to-[#1A2A56] filter blur-[36.2px]"></div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center h-full">
            <div className="flex  items-center gap-4 p-2 md:p-4 lg:p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-11 h-11 p-2.5 justify-center items-center rounded-[8px] bg-[#E6EFFF]">
                <PointerIcon />
              </div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                100% free to use
              </h1>
            </div>

            <div className="flex  items-center gap-4 p-2 md:p-4 lg:p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-11 h-11 p-2.5 justify-center items-center rounded-[8px] bg-[#E6EFFF]">
                <PointerIcon />
              </div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                Works on all devices
              </h1>
            </div>

            <div className="flex  items-center gap-4 p-2 md:p-4 lg:p-6 rounded-[16px] border-[0.3px] border-[#E9E9EA] bg-white shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] w-78 ">
              <div className="flex w-11 h-11 p-2.5 justify-center items-center rounded-[8px] bg-[#E6EFFF]">
                <PointerIcon />
              </div>
              <h1 className="text-[#1A2A56] text-[16px] font-normal leading-[124%] tracking-[0.08px] font-inter">
                Accessible for all ages
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPeopleUse;
