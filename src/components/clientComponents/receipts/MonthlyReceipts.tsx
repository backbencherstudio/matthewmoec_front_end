/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DotIcon from "@/components/icons/DotIcon";
import Pagination from "@/components/reusable/Pagination";
import { useGetMonthlyReceiptsQuery } from "@/redux/features/client/receipt/receiptApi";
import { useMemo, useState } from "react";
import { ReceiptCard } from "./ReceiptCard";

const ITEMS_PER_PAGE = 2;

const MonthlyReceipts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useGetMonthlyReceiptsQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });

  const totalPages = data?.meta?.total_pages || 1;

  const allReceipts = useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return [];

    return data.data.flatMap((monthGroup: any) => monthGroup.receipts || []);
  }, [data]);

  const allCommissionByStore = useMemo(() => {
    if (!data?.data) return [];
    return data.data.flatMap(
      (monthGroup: any) => monthGroup.commission_by_store || [],
    );
  }, [data]);

  if (isLoading) {
    return (
      <div className="p-4 md:p-8 lg:p-12 bg-[#F8F9FB] min-h-screen">
        <div className="text-center py-20">
          <div className="animate-spin w-8 h-8 border-4 border-[#1A2A56] border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-[#6B7A99]">Loading monthly receipts...</p>
        </div>
      </div>
    );
  }

  if (error || allReceipts.length === 0) {
    return (
      <div className="p-4 md:p-8 lg:p-12 bg-[#F8F9FB] min-h-screen">
        <div className="text-center py-20 text-[#6B7A99]">
          No receipts found yet.
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-[#F8F9FB] min-h-screen space-y-6">
      {allReceipts.map((receipt: any) => (
        <ReceiptCard
          key={receipt.id}
          receipt={receipt}
          commissionByStore={allCommissionByStore}
        />
      ))}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Notice */}
      <div className="flex items-center bg-[#DFE1E7] rounded-[8px] p-3 gap-2">
        <DotIcon />
        <p className="text-[#555] text-lg">
          More monthly receipts will appear here as they are pushed by the
          admin. <span className="text-[#243057]">Admin Panel</span>
          {" → "}
          <span className="text-[#243057]">Monthly Receipts Manager</span> to
          add entries.
        </p>
      </div>
    </div>
  );
};

export default MonthlyReceipts;
