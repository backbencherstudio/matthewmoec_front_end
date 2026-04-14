import Image from "next/image";
import Container from "../homePage/Container";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <section className="flex p-[30px_12px_12px_12px]  lg:p-[80px_80px_24px_80px] flex-col justify-center  ">
          <div className="flex flex-col lg:flex-row  lg:pb-12 lg:justify-between items-start   ">
            {/* 1st col */}
            <div className="flex flex-1  flex-col lg:justify-center items-start gap-2.5 lg:gap-6 mt-4">
              <div className="flex lg:justify-center gap-2">
                <Image
                  height={100}
                  width={100}
                  src="/logo.png"
                  alt="Logo"
                  className="w-[47.864px] h-[34.909px] "
                />
                <h1 className="text-[#FFF] text-[28px] font-semibold leading-[124%] tracking-[0.14px] font-inter">
                  CartForGood
                </h1>
              </div>

              <p className="text-[#A5A5AB] text-[16px] font-normal leading-[160%] tracking-[0.08px] font-inter">
                A simple affiliate shopping platform that turns everyday
                purchases into charitable impact.
              </p>

              <h1 className="text-[#FFF] text-[24px] font-semibold leading-[130%] tracking-[0.12px] font-inter">
                Social Link
              </h1>

              <div className=" flex gap-4 justify-center">
                <a className="flex w-10 h-10 p-3 justify-center items-center shrink-0 aspect-square   rounded-[33554400px] bg-[rgba(255,255,255,0.10)] cursor-pointer">
                  <Image
                    height={100}
                    width={100}
                    src="/Instagram.png"
                    alt="Instagram"
                  />
                </a>

                <a className="flex w-10 h-10 p-3 justify-center items-center shrink-0 aspect-square  rounded-[33554400px] bg-[rgba(255,255,255,0.10)] cursor-pointer">
                  <Image
                    height={100}
                    width={100}
                    src="/youtube.png"
                    alt="youtube"
                  />
                </a>

                <a className="flex w-10 h-10 p-3 justify-center items-center shrink-0 aspect-square   rounded-[33554400px] bg-[rgba(255,255,255,0.10)] cursor-pointer">
                  <Image
                    height={100}
                    width={100}
                    src="/linkedin.png"
                    alt="linkedin"
                  />
                </a>

                <a className="flex w-10 h-10 p-3 justify-center items-center shrink-0 aspect-square rounded-[33554400px] bg-[rgba(255,255,255,0.10)] cursor-pointer">
                  <Image
                    height={100}
                    width={100}
                    src="/facebook.png"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>

            {/* CartForGood - 2nd col*/}
            <div className="mt-4 flex-1">
              <h1 className="text-white font-semibold text-[24px] leading-[130%] tracking-[0.12px] font-inter mb-2 lg:mb-4">
                CartForGood
              </h1>
              <div className="flex  pr-5 flex-col justify-center items-start gap-1 lg:gap-2 shrink-0 self-stretch">
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
            <div className="flex flex-1 flex-col justify-center items-start gap-2.5 lg:gap-4 mt-4">
              <h1 className="text-white font-semibold text-[24px] leading-[130%] tracking-[0.12px] font-inter">
                {" "}
                DOWNLOAD{" "}
              </h1>

              <div className="flex  justify-center items-start gap-4 shrink-0">
                {/* apps store */}
                <div className="flex h-10  px-1.5 pt-[6.5px] pb-[6.5px] pl-2 justify-center items-start gap-2 shrink-0 border border-[#A6A6A6] rounded-[6px] bg-black">
                  <Image
                    height={100}
                    width={100}
                    src="/Apple.png"
                    alt="Apple"
                    className="w-5 h-6 "
                  />

                  <div>
                    <p className="text-[#FFF] font-medium text-[9px] leading-2.25 font-['SF_Compact_Text']">
                      Download on the
                    </p>

                    <h1 className="text-[#FFF] font-medium text-[18px] leading-[100%] tracking-[-0.47px] font-['SF_Compact_Display']">
                      App Store
                    </h1>
                  </div>
                </div>

                {/* google play */}
                <div className="flex h-10 pt-1.25 pr-2.5 pb-1.25 pl-2 justify-center items-center gap-1.75 shrink-0 border border-[#A6A6A6] rounded-[6px] bg-black">
                  <Image
                    height={100}
                    width={100}
                    src="/playstore.png"
                    alt="playstore"
                    className="w-5 h-6 "
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
