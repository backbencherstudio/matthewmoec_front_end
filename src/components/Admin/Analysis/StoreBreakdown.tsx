/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetStoreClickBreakdownQuery } from "@/redux/features/admin/analytics/analytics";

export default function StoreBreakdown() {
  const { data, isLoading, error } = useGetStoreClickBreakdownQuery("");

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6 animate-pulse">
        <div className="h-7 w-48 bg-[#ECEFF3] rounded mb-6" />
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center py-3">
              <div className="space-y-2">
                <div className="h-5 w-32 bg-[#ECEFF3] rounded" />
                <div className="h-4 w-24 bg-[#ECEFF3] rounded" />
              </div>
              <div className="h-7 w-12 bg-[#ECEFF3] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error || !data?.success) {
    return (
      <div className="bg-white rounded-2xl border border-[#ECEFF3] p-8 text-center">
        <p className="text-red-500">Failed to load store breakdown</p>
      </div>
    );
  }

  const stores = data.data || [];

  return (
    <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6">
      <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] tracking-[0.1px] mb-6">
        Store Breakdown
      </h2>

      {stores.length === 0 ? (
        <div className="py-12 text-center text-[#B0B8C9]">
          No store click data available yet
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-[#F0F2F7]">
          {stores.map((store: any) => (
            <div
              key={store.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div>
                <p className="text-[#1A2A56] text-base font-bold leading-[132%] tracking-[0.08px]">
                  {store.name}
                </p>
                <p className="text-[#8792A8] text-sm mt-0.5">
                  {store.clicks.toLocaleString()} clicks
                </p>
              </div>

              <span className="bg-[#1A2A56] text-white text-xs font-semibold px-3 py-1.5 rounded-full min-w-13 text-center">
                {store.percentage}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
