/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDonationHistoryQuery } from "@/redux/features/admin/charity/charityApi";
import { useMemo } from "react";

type CharityDonation = {
  id: string;
  charity_organization_name: string;
  donation_amount: number;
  date: string;
  status: string;
};

// Skeleton Component
function DonationHistorySkeleton() {
  return (
    <div className="bg-white rounded-[16px] border border-[#ECEFF3] p-6 animate-pulse">
      <div className="h-7 w-56 bg-[#ECEFF3] rounded mb-8" /> {/* Title */}
      <div className="flex flex-col divide-y divide-[#ECEFF3]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="py-5 first:pt-0 last:pb-0">
            {/* Month + Total Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="h-6 w-32 bg-[#ECEFF3] rounded" />
              <div className="h-6 w-24 bg-[#ECEFF3] rounded" />
            </div>

            {/* Charities */}
            <div className="space-y-3 pl-4">
              {Array.from({ length: index === 2 ? 2 : 1 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="h-5 w-48 bg-[#ECEFF3] rounded" />
                  <div className="h-5 w-20 bg-[#ECEFF3] rounded" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DonationHistory() {
  const { data, error, isLoading } = useGetDonationHistoryQuery("");

  const processedData = useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return [];

    return data.data
      .map((monthItem: any) => {
        const total = monthItem.charities.reduce(
          (sum: number, charity: CharityDonation) =>
            sum + (charity.donation_amount || 0),
          0,
        );

        return {
          month: monthItem.month,
          total,
          charities: monthItem.charities || [],
        };
      })
      .sort((a: { month: string }, b: { month: string }) => {
        const monthsOrder = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
      });
  }, [data]);

  // Show Skeleton while loading
  if (isLoading) {
    return <DonationHistorySkeleton />;
  }

  if (error || !data?.success) {
    return (
      <div className="bg-white rounded-[16px] border border-[#ECEFF3] p-6">
        <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] border-b pb-5 mb-8">
          Donation History
        </h2>
        <div className="py-10 text-center text-red-500">
          Failed to load donation history
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[16px] border border-[#ECEFF3] p-6">
      <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] border-b pb-5 mb-8">
        Donation History {data?.meta?.year && `(${data.meta.year})`}
      </h2>

      <div className="flex flex-col divide-y divide-[#ECEFF3]">
        {processedData.length === 0 ? (
          <div className="py-10 text-center text-[#B0B8C9]">
            No donation records found.
          </div>
        ) : (
          processedData.map((record: any, index: number) => (
            <div key={index} className="py-5 first:pt-0 last:pb-0">
              {/* Month + Total */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#1A2A56] font-bold text-lg leading-[132%] tracking-[0.09px]">
                  {record?.month} {data?.meta?.year && data.meta.year}
                </span>
                <span className="text-[#1A2A56] font-bold text-lg leading-[132%] tracking-[0.09px]">
                  ${record?.total?.toLocaleString()}
                </span>
              </div>

              {/* Charities List */}
              <div className="space-y-2">
                {record?.charities?.map(
                  (charity: CharityDonation, i: number) => (
                    <div
                      key={charity?.id || i}
                      className="flex items-center justify-between pl-4"
                    >
                      <span className="text-[#8792A8] text-base leading-[132%] tracking-[0.08px] before:content-['•'] before:mr-2">
                        {charity?.charity_organization_name}
                      </span>
                      <span className="text-[#8792A8] text-base leading-[132%] tracking-[0.08px]">
                        ${charity?.donation_amount?.toLocaleString()}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
