import AppConfiguration from "@/components/Admin/Settings/AppConfiguration";
import ResetIcon from "@/components/icons/ResetIcon";
import ShearMessageIcon from "@/components/icons/ShearMessageIcon";
import { InfoIcon } from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-13 lg:py-10 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl lg:text-[32px] text-[#1A2A56] leading-[132%] tracking-[0.16px] font-semibold">
          Setting- App Configaration
        </h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-[#ECEFF3] border border-[E9E9EA] rounded-full cursor-pointer">
            <ResetIcon />
            <span className="text-[#1A2A56] text-base font-medium leading-[124%] tracking-[0.08px]">
              Reset
            </span>
          </button>
          <button className="px-8 py-3 bg-[#ECEFF3] border border-[E9E9EA] rounded-full cursor-pointer bg-linear-to-b from-[#3454AC] to-[#1E3061] text-white text-base leading-[124%] tracking-[0.08px] font-medium">
            Save All Changes
          </button>
        </div>
      </div>
      <h1 className="flex items-center gap-2 my-6">
        <ShearMessageIcon />
        <span className="text-[#1A2A56] text-xl font-medium leading-[132%] tracking-[0.1px]">
          Share Message Editor
        </span>
      </h1>
      <div className="p-4 bg-[#F8FAFB] border border-[#ECEFF3] rounded-[16px]">
        <h4 className="text-[#1A2A56] text-lg font-medium leading-[124%] tracking-[0.09px] mb-4">
          Message
        </h4>
        <p className="text-[#777980] text-base leading-[150%]">
          I use CartForGood to shop at Amazon, Walmart and more. A portion goes
          to charity automatically. November is Feeding America. December is
          Toys for Tots. <br /> Free to download. CartForGood.com
        </p>
      </div>
      <div className="my-6">
        <h1 className="flex items-center gap-2">
          <button className="p-1.5 bg-[#C7D9F3] rounded-full">
            <InfoIcon className="h-3 w-3" />
          </button>
          <span className="text-xl font-medium leading-[132%] tracking-[0.1px] text-[#1A2A56]">
            How It Works
          </span>
        </h1>
        <div className="p-4 border border-[#ECEFF3] bg-[#F8FAFB] rounded-[16px] mt-4">
          <p className="text-[#777980] text-base leading-[150%]">
            The stores pay us a small commission when you shop through our
            links. You pay nothing extra. We share what they give us with
            charity every month.
          </p>
        </div>
      </div>
      <div>
        <AppConfiguration />
      </div>
    </div>
  );
}
