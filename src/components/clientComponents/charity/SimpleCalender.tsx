import React from "react";

const SimpleCalender = () => {
  return (
    <div>
      <section className="flex flex-col  gap-12 p-4 md:p-8 lg:p-20 self-stretch bg-[#FFF]">
        <div>
          <h1 className="text-[#1A2A56]  font-inter text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-[124%] tracking-[0.2px] mb-1.5 lg:mb-4">
            How It Works in 4 Simple Steps
          </h1>
          <p className="text-[#4A4C56]  font-inter text-[18px] font-normal leading-[132%] tracking-[0.09px]">
            Shop from your favorite stores and help support charity — all with
            just a few taps.
          </p>
        </div>

        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6    ">
            <div className="  flex flex-col items-center gap-4 flex-[1_0_0] py-10 px-6 pb-8 rounded-[24px] border border-[#E9E9EA] bg-white">
              <div>
                <h1 className="text-[#395CBC] font-inter text-[24px] font-semibold leading-[1.16] tracking-[0.12px]">
                  January 2025
                </h1>

                <p className="font-inter text-[#4A4C56] text-[18px] font-normal leading-[1.32] tracking-[0.09px]">
                  Feeding America
                </p>
              </div>

              <div>
                <h1 className="font-inter text-[#1A2A56] text-[40px] font-semibold leading-[1.24] tracking-[0.2px] text-center">
                  $800
                </h1>
              </div>
            </div>

            <div className="  flex flex-col items-center gap-4 flex-[1_0_0] py-10 px-6 pb-8 rounded-[24px] border border-[#E9E9EA] bg-white">
              <div>
                <h1 className="text-[#395CBC] font-inter text-[24px] font-semibold leading-[1.16] tracking-[0.12px]">
                  January 2025
                </h1>

                <p className="font-inter text-[#4A4C56] text-[18px] font-normal leading-[1.32] tracking-[0.09px]">
                  Feeding America
                </p>
              </div>

              <div>
                <h1 className="font-inter text-[#1A2A56] text-[40px] font-semibold leading-[1.24] tracking-[0.2px] text-center">
                  $800
                </h1>
              </div>
            </div>

            <div className="  flex flex-col items-center gap-4 flex-[1_0_0] py-10 px-6 pb-8 rounded-[24px] border border-[#E9E9EA] bg-white">
              <div>
                <h1 className="text-[#395CBC] font-inter text-[24px] font-semibold leading-[1.16] tracking-[0.12px]">
                  January 2025
                </h1>

                <p className="font-inter text-[#4A4C56] text-[18px] font-normal leading-[1.32] tracking-[0.09px]">
                  Feeding America
                </p>
              </div>

              <div>
                <h1 className="font-inter text-[#1A2A56] text-[40px] font-semibold leading-[1.24] tracking-[0.2px] text-center">
                  $800
                </h1>
              </div>
            </div>

            <div className="  flex flex-col items-center gap-4 flex-[1_0_0] py-10 px-6 pb-8 rounded-[24px] border border-[#E9E9EA] bg-white">
              <div>
                <h1 className="text-[#395CBC] font-inter text-[24px] font-semibold leading-[1.16] tracking-[0.12px]">
                  January 2025
                </h1>

                <p className="font-inter text-[#4A4C56] text-[18px] font-normal leading-[1.32] tracking-[0.09px]">
                  Feeding America
                </p>
              </div>

              <div>
                <h1 className="font-inter text-[#1A2A56] text-[40px] font-semibold leading-[1.24] tracking-[0.2px] text-center">
                  $800
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-4 lg:h-[56px] lg:mt-8 flex  px-6 py-3 lg:py-0 items-center gap-3 rounded-[12px] border-[0.3px] border-[#E9E9EA] bg-[#DFE1E7]">
            <img src="/tickIcon.png" alt="" className="w-6 h-6" />

            <h1 className="text-[#1A2A56] font-inter text-[16px] font-medium leading-[132%] tracking-[0.08px]">
              IMPORTANT: All stores open in your device's EXTERNAL browser —
              never WebView or in-app browser. This is non-negotiable for
              affiliate commission tracking.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleCalender;
