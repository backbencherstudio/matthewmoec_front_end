"use client";
import { useGetLinksQuery } from "@/redux/features/client/config/configApi";
import { ArrowDown } from "lucide-react";

const TakeEveryWhere = () => {
  const { data } = useGetLinksQuery("");
  return (
    <div>
      <section className="flex p-4 md:p-8 lg:p-20 justify-center items-center  bg-linear-to-b from-[#395CBC] to-[#1A2A56]">
        <div className="grid grid-cols-1 gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4 ">
            <h1 className="text-[#FFF] text-[24px] md:text-[32px] lg:text-[48px]  font-semibold leading-[124%] tracking-[0.24px] font-inter text-center">
              Take CartForGood everywhere
            </h1>

            <p className="text-[#D2D2D5] text-[12px] md:text-[16px] lg:text-[18px]  font-normal leading-[132%] tracking-[0.09px] font-inter text-center">
              Download the app for faster access and a smoother shopping
              experience.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
            <a
              href={data?.data?.ios_app_store_url}
              target="_blank"
              className="group w-full sm:w-65 inline-flex h-12 lg:h-14 px-3 lg:px-6 py-2 lg:py-4 justify-center items-center rounded-[30px] bg-linear-to-b from-[#395CBC] to-[#1A2A56] text-[#FFF] font-medium text-[12px] md:text-[12px] lg:text-[16px] leading-[100%] tracking-[0.08px] font-inter cursor-pointer hover:shadow-md"
            >
              <div className="flex items-center gap-1 lg:gap-2.5">
                <ArrowDown className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
                <h1 className="text-[#FFF] font-medium text-[18px] leading-[100%] tracking-[0.09px] font-inter">
                  Download For iOS
                </h1>
              </div>
            </a>

            <a
              href={data?.data?.android_play_store_url}
              target="_blank"
              className="group w-full sm:w-65 inline-flex h-12 lg:h-14 px-3 lg:px-6 py-2 lg:py-4 justify-center items-center rounded-[30px] border border-[#FFF] text-white font-medium text-[12px] md:text-[12px] lg:text-[16px] leading-[100%] tracking-[0.08px] font-inter cursor-pointer text-nowrap hover:shadow-md"
            >
              <div className="flex items-center gap-1 lg:gap-2">
                <ArrowDown className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
                <h1 className="text-[#FFF] font-medium text-[18px] leading-[100%] tracking-[0.09px] font-inter">
                  Download For Android
                </h1>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakeEveryWhere;
