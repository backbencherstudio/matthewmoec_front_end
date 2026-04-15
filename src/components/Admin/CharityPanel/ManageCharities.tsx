"use client";

import EditIcon from "@/components/icons/EditIcon";
import { useGetCharityQuery } from "@/redux/features/admin/charity/charityApi";
import { Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

type CharityDonation = {
  id: string | number;
  charity_organization_name: string;
  donation_amount: number;
  date?: string;
};

// ✅ Skeleton Component
function CharitySkeleton() {
  return (
    <div className="flex items-center justify-between bg-[#F6F8FA] rounded-[12px] p-4 border border-[#ECEFF3] animate-pulse">
      <div className="h-4 w-40 bg-gray-200 rounded"></div>

      <div className="flex items-center gap-3">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

export default function ManageCharities() {
  const searchParams = useSearchParams();

  const monthString = searchParams.get("month") || "January 2025";
  const [monthName, year] = monthString.split(" ");

  const monthMap: Record<string, number> = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const month = monthMap[monthName];
  const yearNumber = Number(year);

  const { data: charities, isLoading, isFetching } = useGetCharityQuery({
    month,
    year: yearNumber,
  });

  const isDataLoading = isLoading || isFetching;

  return (
    <div className="flex flex-col gap-2">
      {isDataLoading ? (
        Array.from({ length: 5 }).map((_, i) => (
          <CharitySkeleton key={i} />
        ))
      ) : (
        <>
          {charities?.data?.map((charity: CharityDonation) => (
            <div
              key={charity?.id}
              className="flex items-center justify-between bg-[#F6F8FA] rounded-[12px] p-4 border border-[#ECEFF3]"
            >
              <span className="text-[#1A2A56] text-base font-medium">
                {charity?.charity_organization_name}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-[#395CBC] text-base font-semibold">
                  ${charity?.donation_amount?.toLocaleString()}
                </span>

                <button className="text-[#385BBA] hover:text-[#1F3266] transition-colors cursor-pointer">
                  <EditIcon />
                </button>

                <button className="text-[#F04438] hover:text-red-700 transition-colors cursor-pointer">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Empty state */}
          {charities?.data?.length === 0 && (
            <p className="text-[#B0B8C9] text-sm text-center py-4">
              No charities added yet.
            </p>
          )}
        </>
      )}
    </div>
  );
}