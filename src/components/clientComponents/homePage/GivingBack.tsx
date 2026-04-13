import Container from "@/components/ui/Container";
import React from "react";


const GivingBack = () => {
  return (
    <div>
      <div className="py-20 bg-white">
        <Container>
          <div>
            <h1
              className="text-center text-[#1A2A56] text-[2rem] lg:text-[3rem] font-semibold tracking-wide leading-snug 
                        text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            >
              4 steps to giving back without thinking about it.
            </h1>
            <p className="text-center text-[#4A4C56] text-[1.125rem] font-normal leading-[132%] tracking-[0.09px] mt-1.5 mb-3.5 md:mt-2 md:mb-7 lg:mt-4 lg:mb-12">
              Even the smallest steps can add up to create a powerful and
              positive impact over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            <div className="flex flex-col justify-center items-center gap-5 flex-1 border border-[#ECEFF3] rounded-[16px] bg-[#F6F8FA] p-[44px_32px]">
              <div className="flex justify-center items-center h-10">
                <img
                  src="/NumRow1.png"
                  alt="Your Image"
                  className="h-full object-contain"
                />
              </div>
              <h2 className="text-center text-[#1A2A56] text-[24px] font-bold leading-normal font-inter">
                Download Free
              </h2>
              <p className="text-center text-[#7D828F] text-[16px] font-normal leading-[150%] font-inter">
Get CartForGood on iOS or Android. No account, no sign-up.
</p>
            </div>



                <div className="flex flex-col justify-center items-center gap-5 flex-1 border border-[#ECEFF3] rounded-[16px] bg-[#F6F8FA] p-[44px_32px]">
              <div className="flex justify-center items-center h-10">
                <img
                  src="/NumRow2.png"
                  alt="Your Image"
                  className="h-full object-contain"
                />
              </div>
              <h2 className="text-center text-[#1A2A56] text-[24px] font-bold leading-normal font-inter">
               Tap a Store
              </h2>
              <p className="text-center text-[#7D828F] text-[16px] font-normal leading-[150%] font-inter">
Choose from our growing list of stores.Opens in external browser affiliate tracking guaranteed.
</p>
            </div>



                <div className="flex flex-col justify-center items-center gap-5 flex-1 border border-[#ECEFF3] rounded-[16px] bg-[#F6F8FA] p-[44px_32px]">
              <div className="flex justify-center items-center h-10">
                <img
                  src="/NumRow3.png"
                  alt="Your Image"
                  className="h-full object-contain"
                />
              </div>
              <h2 className="text-center text-[#1A2A56] text-[24px] font-bold leading-normal font-inter">
               Shop as Usual
              </h2>
              <p className="text-center text-[#7D828F] text-[16px] font-normal leading-[150%] font-inter">
Same prices. Same products. we earn a small commission in the background.
</p>
            </div>



                <div className="flex flex-col justify-center items-center gap-5 flex-1 border border-[#ECEFF3] rounded-[16px] bg-[#F6F8FA] p-[44px_32px]">
              <div className="flex justify-center items-center h-10">
                <img
                  src="/NumRow4.png"
                  alt="Your Image"
                  className="h-full object-contain"
                />
              </div>
              <h2 className="text-center text-[#1A2A56] text-[24px] font-bold leading-normal font-inter">
                We Donate
              </h2>
              <p className="text-center text-[#7D828F] text-[16px] font-normal leading-[150%] font-inter">
A portion goes to charity every month. Publicly posted, fully transparent.
</p>
            </div>
          </div>


          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-3.5  
            border-[0.3px] border-[#E9E9EA] bg-[#F0F3F9] rounded-[12px]  p-4 sm:gap-2.5 w-full ">
              
          <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4">
  <path d="M8 0C3.58897 0 0 3.58897 0 8C0 12.411 3.58897 16 8 16C12.411 16 16 12.411 16 8C16 3.58897 12.411 0 8 0ZM12.4712 5.89474L7.3584 10.9674C7.05764 11.2682 6.57644 11.2882 6.25564 10.9875L3.54887 8.5213C3.22807 8.22055 3.20802 7.7193 3.48872 7.3985C3.78947 7.07769 4.29073 7.05764 4.61153 7.3584L6.75689 9.32331L11.3283 4.75188C11.6491 4.43108 12.1504 4.43108 12.4712 4.75188C12.792 5.07268 12.792 5.57393 12.4712 5.89474Z" fill="url(#paint0_linear_6314_336)"/>
  <defs>
    <linearGradient id="paint0_linear_6314_336" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
      <stop stopColor="#395CBC"/>
      <stop offset="1" stopColor="#1A2A56"/>
    </linearGradient>
  </defs>
</svg></div>

              <h1 className="text-[#1A2A56] text-[16px] font-medium font-inter">
  IMPORTANT: All stores open in your device's EXTERNAL browser — never WebView or in-app browser. This is non-negotiable for affiliate commission tracking.
</h1>

</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GivingBack;
