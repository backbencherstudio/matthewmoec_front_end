import AnalysisStatusCard from "@/components/Admin/Analysis/AnalysisStatusCard";
import AnalyticsDashboard from "@/components/Admin/Analysis/AnalyticsDashboard";
import StoreBreakdown from "@/components/Admin/Analysis/StoreBreakdown";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-13 lg:py-10 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />
      <h1 className="text-lg md:text-xl lg:text-[32px] text-[#1A2A56] leading-[132%] tracking-[0.16px] font-semibold">
        Analytics and Reporting
      </h1>
      <div className="mt-4">
        <AnalysisStatusCard />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsDashboard />
        <StoreBreakdown />
      </div>
    </div>
  );
}
