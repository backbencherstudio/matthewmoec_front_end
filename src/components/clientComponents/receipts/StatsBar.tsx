"use client";

import { useGetMonthlyStatisticsQuery } from "@/redux/features/client/receipt/receiptApi";

const StatsBar = () => {
  const { data, isLoading, error } = useGetMonthlyStatisticsQuery("");

  // Format numbers with commas and dollar sign where needed
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  const stats = [
    {
      value: isLoading
        ? "..."
        : formatCurrency(data?.data?.total_donation_from_charity || 0),
      label: "Total Donated (All Time)",
    },
    {
      value: isLoading
        ? "..."
        : (data?.data?.total_unique_charity_support || 0).toString(),
      label: "Charities Supported",
    },
    {
      value: isLoading
        ? "..."
        : (data?.data?.total_months_report || 0).toString(),
      label: "Months Reported",
    },
    {
      value: isLoading
        ? "..."
        : (data?.data?.total_active_store || 0).toString(),
      label: "Stores Contributing",
    },
  ];

  if (error) {
    return (
      <div className="bg-[#1A2A56] py-8 text-center">
        <p className="text-white/70">Unable to load statistics at the moment</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1A2A56]">
      <div className="py-6 px-4 sm:px-10 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
        {stats.map((stat, index) => (
          <div key={index} className="mx-auto px-2 text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight">
              {stat.value}
            </h1>
            <p className="text-[#D2D2D5] text-sm sm:text-base md:text-lg mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
