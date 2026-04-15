"use client";

import { useGetAnalysisStatisticsQuery } from "@/redux/features/admin/analytics/analytics";

// Skeleton Card
function StatCardSkeleton() {
  return (
    <div className="p-8 bg-[#F6F8FA] border border-[#EBEFF8] rounded-[16px] shadow-md animate-pulse">
      <div className="h-4 w-40 bg-[#E9E9EA] rounded" />
      <div className="h-10 w-32 bg-[#E9E9EA] rounded mt-6" />
    </div>
  );
}

export default function AnalysisStatusCard() {
  const { data, isLoading, error } = useGetAnalysisStatisticsQuery("");

  const statusCards = [
    {
      title: "Total Taps (All Time)",
      amount: data?.data?.total_clicks_all_time?.toLocaleString() || "0",
    },
    {
      title: "This Month Taps",
      amount: data?.data?.click_this_month?.toLocaleString() || "0",
    },
    {
      title: "Share Button Taps",
      amount: data?.data?.share_button_click?.toLocaleString() || "0",
    },
    {
      title: "Visits",
      amount: data?.data?.visits?.toLocaleString() || "0",
    },
  ];

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Optional: Error state
  if (error) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-full p-8 bg-red-50 border border-red-200 rounded-[16px] text-center">
          <p className="text-red-600">Failed to load analytics data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statusCards.map((item, index) => (
        <div
          key={index}
          className="p-8 bg-[#F6F8FA] border border-[#EBEFF8] rounded-[16px] shadow-md"
        >
          <p className="text-base text-[#777980] leading-[132%] tracking-[0.08px]">
            {item.title}
          </p>
          <p className="mt-4 text-[#1A2A56] text-lg md:text-2xl font-bold leading-[116%] tracking-[0.12px]">
            {item.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
