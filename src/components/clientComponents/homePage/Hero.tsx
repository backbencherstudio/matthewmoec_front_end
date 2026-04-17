"use client";
import {
  useGetCharityQuery,
  useGetLinksQuery,
} from "@/redux/features/client/config/configApi";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const HeroSection = () => {
  const { data } = useGetLinksQuery("");
  const { data: charityData } = useGetCharityQuery("");
  console.log(charityData);
  return (
    <div className="min-hscre">
      <section className="relative pt-6 md:p-8 lg:pt-24 overflow-hidden ">
        <Container>
          {/* Hero Content */}
          <div className="flex flex-col md:flex-row justify-between lg:pb-[115] ">
            {/* Left Section */}
            <div className="flex-1 text-center md:text-left relative">
              <h1 className="text-[1.5rem] xl:text-[2.75rem] font-semibold text-[#1A2A56] leading-[120%] tracking-[0.5%] lg:w-[30ch] xl:w-[30ch]">
                Shop normally. Help others. Shop Your Favorite Stores. Give Back
                Automatically.
              </h1>
              <p className="text-[12px] lg:text-lg mt-4 text-[#1A2A56] xl:w-[50ch]">
                Tap a store, shop as usual, and we donate a portion to charity
                every month.
              </p>
              <div className="mt-8 space-x-4 md:space-y-2 space-y-2.5 w-50 md:w-full mx-auto md:mx-0">
                <a
                  href={data?.data?.ios_app_store_url}
                  target="_blank"
                  className="group inline-block px-3 lg:px-6 py-1.5 lg:py-3 bg-linear-to-b from-[#395CBC] to-[#1A2A56] text-white hover:bg-[#1A2A56] rounded-[30px] transition w-full md:w-2/3 lg:w-fit cursor-pointer hover:shadow-md"
                >
                  <div className="flex justify-center items-center gap-1 lg:gap-2">
                    <h1 className="text-[#FFF] font-medium text-[12px] md:text-[14px] lg:text-[18px] leading-[100%] tracking-[0.09px] font-inter">
                      Download For iOS
                    </h1>
                    <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-45" />
                  </div>
                </a>

                <a
                  href={data?.data?.android_play_store_url}
                  target="_blank"
                  className="group inline-block px-3 lg:px-6 py-1.5 lg:py-3 rounded-[30px] border transition w-full md:w-2/3 lg:w-fit cursor-pointer hover:shadow-md"
                >
                  <div className="flex justify-center items-center gap-1 lg:gap-2">
                    <h1 className="text-[#1A2A56] font-medium text-[12px] md:text-[14px] lg:text-[18px] leading-[100%] tracking-[0.09px] font-inter">
                      Download For Android
                    </h1>
                    <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-45" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Section (Phone Mockup and Donation Display) */}
            <div className=" flex-1 justify-end mt-6 md:mt-0 relative bottom-5 py-7 md:p-1 lg:p-0">
              {/* Phone Image */}
              <Image
                height={400}
                width={400}
                src={"/heroimage.png"}
                alt="Phonemockup"
                className="lg:w-full object-cover"
              />

              <div className="hidden md:block absolute -z-10 ">
                <div className="lg:w-100 lg:h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl rotate-45 absolute bottom-0"></div>
                <div className="">
                  <div className=" lg:w-150 lg:h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl -rotate-45 absolute bottom-0"></div>

                  <div className="lg:w-150 lg:h-50 bg-linear-to-r from-[#B5C9FF] to-white rounded-full blur-xl -rotate-135 absolute bottom-0"></div>
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
          <div className="text-white grid grid-cols-1 sm:grid-cols-2  lg:flex justify-between lg:h-26 items-center gap-4 py-8  sm:py-8 md:py-6 lg:py-0 ">
            {/* <p className="text-[1rem]   "></p> */}
            <p className="text-[1rem]   ">
              Last Month’s Confirmed Donation Amount
            </p>
            <p className="text-[2rem]  font-bold ">
              ${charityData?.data?.[0]?.donation_amount || "0"}
            </p>
            <ArrowRight className="text-[1.5rem] " />
            <p className="text-[1rem]   ">
              {charityData?.data?.[0]?.charity_organization_name ||
                "Charity Name"}
            </p>
            <p className="text-[2rem]  font-bold ">
              ${charityData?.data?.[1]?.donation_amount || "0"}
            </p>
            <ArrowRight className="text-[1.5rem] " />
            <p className="text-[1rem]   ">
              {charityData?.data?.[1]?.charity_organization_name ||
                "Charity Name"}
            </p>
            <p className="rounded-full border py-2 px-4">
              {" "}
              <Link
                href={"/receipts"}
                className=" lg:h-4 cursor-pointer text-[1rem] "
              >
                {" "}
                View Receipt →
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
