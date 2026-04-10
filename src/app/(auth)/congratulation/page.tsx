import CongratulationIcon from "@/components/icons/CongratulationIcon";
import Link from "next/link";

export default function CongratulationPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-10 w-full max-w-sm border border-[#ECEFF3] shadow-sm flex flex-col items-center">
        <h1 className="text-[#1A2A56] text-xl md:text-2xl font-semibold text-center leading-[124%] tracking-[0.14px] mb-6">
          Congratulation
        </h1>

        {/* Check icon circle */}
        <CongratulationIcon />

        {/* Button */}
        <Link href="/" className="submit-btn text-center mt-8">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
