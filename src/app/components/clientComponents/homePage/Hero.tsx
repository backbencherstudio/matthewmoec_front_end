import React from "react";
import Container from "../../ui/Container";
import TrustedStores from "./TrustedStores";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <section className="relative pt-24 overflow-hidden ">
        <Container>
          {/* Hero Content */}
          <div className="flex flex-col md:flex-row justify-between ">
            {/* Left Section */}
            <div className="text-center md:text-left relative">
              <h1 className="text-[2rem] xl:text-[2.75rem] font-semibold text-[#1A2A56] leading-[120%] tracking-[0.5%] lg:w-[30ch] xl:w-[30ch]">
                Shop normally. Help others. Shop Your Favorite Stores. Give Back
                Automatically.
              </h1>
              <p className="lg:text-lg mt-4 text-[#1A2A56] xl:w-[50ch]">
                Discover top brands, shop through trusted affiliate links, and
                help fund real charity — at no extra cost to you.
              </p>
              <div className="mt-8 space-x-4 md:space-y-2 space-y-2.5">
                <button className="px-6 py-3 bg-linear-to-b from-[#395CBC] to-[#1A2A56] text-white hover:bg-[#1A2A56] rounded-[30px] transition">
                  Download For iOS
                </button>
                <button className="px-6 py-3  text-[#1A2A56] rounded-[30px] border transition">
                  Download For Android
                </button>
              </div>
            </div>

            {/* Right Section (Phone Mockup and Donation Display) */}
            <div className=" h-[578.3px] mt-6 md:mt-0 relative bottom-5 ">
              {/* Phone Image */}
              <img src="/heroImg2.png" alt="Phone mockup" className="w-full" />

              <div className="hidden md:block absolute -z-10 ">
                <div className="w-100 h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl rotate-45 absolute bottom-0"></div>
                <div className="">
                  <div className=" w-150 h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl -rotate-45 absolute bottom-0"></div>

                  <div className="w-150 h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl -rotate-135 absolute bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className=" md:-z-10 md:w-100 md:h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl -rotate-45 absolute bottom-0 -left-25"></div>
      </section>

      {/* //blue card  */}
      <section className="bg-[#1A2A56]  ">
        <Container>
          <div className="text-white grid grid-cols-1 sm:grid-cols-2  lg:flex justify-between lg:h-26 items-center gap-4 p-1 sm:p-3 lg:p-0 ">
             {/* <p className="text-[1rem]   "></p> */}
            <p className="text-[1rem]   ">Last Month’s Confirmed Donation Amount</p>
            <p className="text-[2rem]  font-bold ">$800</p>
            <ArrowRight className="text-[1.5rem] " />
             <p className="text-[1rem]   ">Feeding America</p>
            <p className="text-[2rem]  font-bold ">$440</p>
            <ArrowRight className="text-[1.5rem] " />
             <p className="text-[1rem]   ">Springfield Food Pantry</p>
            <p className="rounded-full border-2 p-0.5"> <button className=" lg:h-4  "> View Receipt →</button></p>
            
          </div>
        </Container>
      </section>



      <TrustedStores></TrustedStores>
    </div>
  );
};

export default HeroSection;
