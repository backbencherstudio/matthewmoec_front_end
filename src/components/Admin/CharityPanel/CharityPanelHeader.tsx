"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

function generateMonthOptions(totalMonths = 12) {
  const options: string[] = [];
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  for (let i = 0; i < totalMonths; i++) {
    const date = new Date(currentYear, currentMonth + i, 1);

    const formattedMonth = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    options.push(formattedMonth);
  }

  return options;
}

export default function CharityPanelHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const monthOptions = useMemo(() => generateMonthOptions(12), []);

  const initialMonth = searchParams.get("month") || monthOptions[0];

  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setShowMonthDropdown(false);

    const params = new URLSearchParams(searchParams.toString());
    params.set("month", month);

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <h1 className="text-[#1A2A56] text-2xl sm:text-[28px] font-bold leading-[124%] tracking-[0.16px]">
        Charity Panel
      </h1>

      <div className="flex items-center gap-2">
        <span className="text-[#1A2A56] text-base font-medium whitespace-nowrap">
          Select Month:
        </span>

        <div className="relative">
          <button
            onClick={() => setShowMonthDropdown((v) => !v)}
            className="flex items-center gap-2 bg-white border border-[#ECEFF3] rounded-full px-4 py-2 text-sm font-medium text-[#395CBC] transition-colors cursor-pointer"
          >
            {selectedMonth}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 5l4 4 4-4"
                stroke="#395CBC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {showMonthDropdown && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-[#ECEFF3] rounded-xl shadow-lg z-20 w-48 max-h-52 overflow-y-auto">
              {monthOptions.map((m) => (
                <button
                  key={m}
                  onClick={() => handleMonthSelect(m)}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#F6F8FA] transition-colors ${
                    m === selectedMonth
                      ? "text-[#1F3266] font-semibold"
                      : "text-[#1A2A56]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
