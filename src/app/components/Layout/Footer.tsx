import React from "react";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-[#000]">
      <Container>
      <section className="flex p-[30px_12px_12px_12px]  lg:p-[80px_80px_24px_80px] flex-col justify-center  ">
        <div className="flex flex-col lg:flex-row  lg:pb-[48px] lg:justify-between items-start   ">
          {/* 1st col */}
          <div className="flex flex-1  flex-col lg:justify-center items-start gap-[10px] lg:gap-[24px] mt-4">
            <div className="flex lg:justify-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[47.864px] h-[34.909px] "
              />
              <h1 className="text-[#FFF] text-[28px] font-semibold leading-[124%] tracking-[0.14px] font-inter">
                CartForGood
              </h1>
            </div>

            <p className="text-[#A5A5AB] text-[16px] font-normal leading-[160%] tracking-[0.08px] font-inter">
              A simple affiliate shopping platform that turns everyday purchases
              into charitable impact.
            </p>

            <h1 className="text-[#FFF] text-[24px] font-semibold leading-[130%] tracking-[0.12px] font-inter">
              Social Link
            </h1>

            <div className=" flex gap-4 justify-center">
              <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1]   rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
                <img src="/Instagram.png" alt="" />
              </div>

              <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1]  rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
                <img src="/youtube.png" alt="" />
              </div>

              <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1]   rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
                <img src="/linkedin.png" alt="" />
              </div>

              <div className="flex w-[40px] h-[40px] p-[12px] justify-center items-center flex-shrink-0 aspect-[1/1] rounded-[33554400px] bg-[rgba(255,_255,_255,_0.10)]">
                <img src="/facebook.png" alt="" />
              </div>
            </div>
          </div>

          {/* CartForGood - 2nd col*/}
          <div className="mt-4 flex-1">
            <h1 className="text-white font-semibold text-[24px] leading-[130%] tracking-[0.12px] font-inter mb-2 lg:mb-4">
              CartForGood
            </h1>
            <div className="flex  pr-[20px] flex-col justify-center items-start gap-[4px] lg:gap-[8px] shrink-0 self-stretch">
              <h1 className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
                Home
              </h1>
              <h1 className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
                How It Works
              </h1>
              <h1 className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
                Charity Calendar
              </h1>
              <h1 className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
                Monthly Receipts
              </h1>
              <h1 className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
                About
              </h1>
            </div>
          </div>

          {/* download - 3rd col*/}
          <div className="flex flex-1 flex-col justify-center items-start gap-[10px] lg:gap-[16px] mt-4">
            <h1 className="text-white font-semibold text-[24px] leading-[130%] tracking-[0.12px] font-inter">
              {" "}
              DOWNLOAD{" "}
            </h1>

            <div className="flex  justify-center items-start gap-[16px] shrink-0">
              {/* apps store */}
              <div className="flex h-10  px-[6px] pt-[6.5px] pb-[6.5px] pl-[8px] justify-center items-start gap-[8px] shrink-0 border border-[#A6A6A6] rounded-[6px] bg-black">
                <img src="/Apple.png" alt="" className="w-[20px] h-[24px] " />

                <div>
                  <p className="text-[#FFF] font-medium text-[9px] leading-[9px] font-['SF_Compact_Text']">
                    Download on the
                  </p>

                  <h1 className="text-[#FFF] font-medium text-[18px] leading-[100%] tracking-[-0.47px] font-['SF_Compact_Display']">
                    App Store
                  </h1>
                </div>
              </div>

              {/* google play */}
              <div className="flex h-10 pt-[5px] pr-[10px] pb-[5px] pl-[8px] justify-center items-center gap-[7px] shrink-0 border border-[#A6A6A6] rounded-[6px] bg-black">
                <img
                  src="/playstore.png"
                  alt=""
                  className="w-[20px] h-[24px] "
                />

                <div>
                  <p className="text-[#FFF] font-normal text-[10px] uppercase font-['Product_Sans']">
                    GET IT ON
                  </p>

                  <h1 className="text-[#FFF] font-medium text-[18px] leading-[100%] tracking-[-0.47px] font-['SF_Compact_Display']">
                    Google Play
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 lg:py-0">
         
          <hr />
        </div>

        <div className=" p-4 flex flex-col lg:flex-row justify-center lg:justify-between">
          <h1 className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
            Copyright © 2026 CartForGood. All rights reserved.
          </h1>

          <div className=" flex gap-6">
            <p className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
              Privacy Policy
            </p>
            <p className="text-[#A5A5AB] font-normal text-[16px] leading-[160%] tracking-[0.08px] font-inter">
              Terms & Condition
            </p>
          </div>
        </div>
      </section>
      </Container>
    </footer>
  );
};

export default Footer;
