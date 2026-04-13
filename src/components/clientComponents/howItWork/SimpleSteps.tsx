import Container from "@/components/clientComponents/homePage/Container";
import Image from "next/image";

const SimpleSteps = () => {
  return (
    <div>
      <section className="flex flex-col items-center gap-12 py-4 md:py-8 lg:py-20 self-stretch bg-[#F0F3F9]">
        <div>
          <h1 className="text-[#1A2A56] text-center font-inter text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-[124%] tracking-[0.2px] mb-1.5 lg:mb-4">
            How It Works in 4 Simple Steps
          </h1>
          <p className="text-[#4A4C56] text-center font-inter text-[18px] font-normal leading-[132%] tracking-[0.09px]">
            Shop from your favorite stores and help support charity — all with
            just a few taps.
          </p>
        </div>

        <Container>
          <div className="">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6   lg:[&>*:nth-child(odd)]:mt-[53] ">
              <div className="  flex flex-col gap-2 md:gap-4 xl:gap-6  p-3  md:p-5 lg:p-8 rounded-[16px] border-[0.3px] border-[#ECEFF3] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                <h1 className="text-[#1A2A56] font-inter text-[52px] md:text-[64px] lg:text-[80px] font-bold leading-normal opacity-15 text-center">
                  01
                </h1>

                <div>
                  <h1 className="text-[#1A2A56] text-center font-inter text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[140%] mb-4">
                    Download the App
                  </h1>

                  <p className="text-[#7D828F] text-center font-inter text-[16px] font-normal leading-[150%]">
                    Get CartForGood free on iOS or Android. No account required.
                    No sign-up. No email needed. Just download and open.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 lg:gap-6  p-3  md:p-5 lg:p-8  rounded-[16px] border-[0.3px] border-[#ECEFF3] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                <h1 className="text-[#1A2A56] font-inter text-[52px] md:text-[64px] lg:text-[80px] font-bold leading-normal opacity-15 text-center">
                  02
                </h1>

                <div>
                  <h1 className="text-[#1A2A56] text-center font-inter text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[140%] mb-4">
                    Tap Any Store Button
                  </h1>

                  <p className="text-[#7D828F] text-center font-inter text-[16px] font-normal leading-[150%]">
                    Choose from Amazon, Walmart, Target, Home Depot, Chewy,
                    Wayfair, Etsy, or eBay. Each tap opens the store in your
                    EXTERNAL browser with your affiliate link embedded.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 lg:gap-6  p-3  md:p-5 lg:p-8  rounded-[16px] border-[0.3px] border-[#ECEFF3] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                <h1 className="text-[#1A2A56] font-inter text-[52px] md:text-[64px] lg:text-[80px] font-bold leading-normal opacity-15 text-center">
                  03
                </h1>

                <div>
                  <h1 className="text-[#1A2A56] text-center font-inter text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[140%] mb-4">
                    Shop Exactly as Usual
                  </h1>

                  <p className="text-[#7D828F] text-center font-inter text-[16px] font-normal leading-[150%]">
                    Same prices. Same products. Same checkout experience. You
                    don&apos;t do anything differently — we earn a small
                    commission in the background.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 lg:gap-6  p-3  md:p-5 lg:p-8  rounded-[16px] border-[0.3px] border-[#ECEFF3] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                <h1 className="text-[#1A2A56] font-inter text-[52px] md:text-[64px] lg:text-[80px] font-bold leading-normal opacity-15 text-center">
                  04
                </h1>

                <div>
                  <h1 className="text-[#1A2A56] text-center font-inter text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[140%] mb-4">
                    We Donate Every Month
                  </h1>

                  <p className="text-[#7D828F] text-center font-inter text-[16px] font-normal leading-[150%]">
                    A verified portion of every commission goes directly to
                    charity. Confirmed receipts posted publicly. Full
                    transparency — every single month.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:h-14 lg:mt-8 flex  px-6 py-3 lg:py-0 items-center gap-3 rounded-[12px] border-[0.3px] border-[#E9E9EA] bg-[#DFE1E7]">
              <Image
                height={100}
                width={100}
                src="/tickIcon.png"
                alt="tickIcon"
                className="w-6 h-6"
              />

              <h1 className="text-[#1A2A56] font-inter text-[16px] font-medium leading-[132%] tracking-[0.08px]">
                IMPORTANT: All stores open in your device&apos;s EXTERNAL
                browser — never WebView or in-app browser. This is
                non-negotiable for affiliate commission tracking.
              </h1>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SimpleSteps;
