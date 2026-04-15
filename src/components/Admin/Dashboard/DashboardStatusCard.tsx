"use client";

import { useGetDashboardStatisticsQuery } from "@/redux/features/admin/analytics/analytics";
import { useMemo } from "react";

// Skeleton Card Component
function StatCardSkeleton() {
  return (
    <div className="bg-[#F6F8FA] p-8 border border-[#E9E9EA] rounded-[16px] shadow animate-pulse">
      <div className="h-4 w-32 bg-[#E9E9EA] rounded" />
      <div className="h-9 w-40 bg-[#E9E9EA] rounded mt-6" />
      <div className="h-4 w-28 bg-[#E9E9EA] rounded mt-6" />
    </div>
  );
}

export default function DashboardStatusCard() {
  const { data, isLoading, error } = useGetDashboardStatisticsQuery("");

  // Process backend data into display format
  const stats = useMemo(() => {
    if (!data?.data) return [];

    const d = data.data;

    return [
      {
        title: "Total Store Clicks",
        value: d.total_click?.toLocaleString() || "0",
        change: `${d.this_month_compare_clicks_percentage || 0}% this month`,
        changeColor:
          (d.this_month_compare_clicks_percentage || 0) >= 0
            ? "#116557"
            : "#F04438",
      },
      {
        title: "Monthly Donations",
        value: `$${d.total_monthly_donation?.toLocaleString() || "0"}`,
        change:
          d.top_donated_charity?.charity_organization_name ||
          "No donations yet",
        changeColor: "#116557",
      },
      {
        title: "Active Stores",
        value: d.total_active_store?.toString() || "0",
        change: "All enabled",
        changeColor: "#116557",
      },
      {
        title: "Visits",
        value: d.total_visits?.toLocaleString() || "0",
        change: `${d.this_month_compare_visits_percentage || 0}% this week`,
        changeColor:
          (d.this_month_compare_visits_percentage || 0) >= 0
            ? "#116557"
            : "#F04438",
      },
    ];
  }, [data]);

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Optional: Show error state
  if (error) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-full bg-red-50 border border-red-200 p-8 rounded-[16px] text-center">
          <p className="text-red-600">Failed to load dashboard statistics</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#F6F8FA] p-8 border border-[#E9E9EA] rounded-[16px] shadow"
        >
          <h3 className="text-[#777980] text-base leading-[132%] tracking-[0.08px]">
            {stat.title}
          </h3>

          <p className="mt-4 text-[#1A2A56] text-lg md:text-2xl font-black leading-[116%] tracking-[0.12px]">
            {stat.value}
          </p>

          <p
            className="mt-4 text-sm leading-[100%] tracking-[0.07px]"
            style={{ color: stat.changeColor }}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
