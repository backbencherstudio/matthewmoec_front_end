"use client";
import DotIcon from "@/components/icons/DotIcon";
import { useState } from "react";
import { ReceiptCard } from "./ReceiptCard";

interface Store {
  img: string;
  name: string;
  amount: number;
}

interface Receipt {
  id: number;
  month: string;
  dateTransferred: string;
  receiptRef: string;
  verified: boolean;
  stores: Store[];
  charity: {
    name: string;
    amount: number;
  };
}

const receipts: Receipt[] = [
  {
    id: 1,
    month: "November 2025",
    dateTransferred: "April 1st, 2026",
    receiptRef: "CFG-2659-03",
    verified: true,
    stores: [
      { img: "/admin/amazon.png", name: "Amazon", amount: 520 },
      { img: "/admin/walmart.png", name: "Walmart", amount: 310 },
      { img: "/admin/target.png", name: "Target", amount: 220 },
      { img: "/admin/homedepot.png", name: "Home Depot", amount: 198 },
    ],
    charity: { name: "Feeding America", amount: 1248 },
  },
  {
    id: 2,
    month: "March 2026",
    dateTransferred: "April 1st, 2026",
    receiptRef: "CFG-2659-03",
    verified: true,
    stores: [
      { img: "/admin/amazon.png", name: "Amazon", amount: 520 },
      { img: "/admin/walmart.png", name: "Walmart", amount: 310 },
      { img: "/admin/target.png", name: "Target", amount: 220 },
      { img: "/admin/homedepot.png", name: "Home Depot", amount: 198 },
    ],
    charity: { name: "Feeding America", amount: 1248 },
  },
  {
    id: 3,
    month: "February 2026",
    dateTransferred: "March 1st, 2026",
    receiptRef: "CFG-2658-02",
    verified: true,
    stores: [
      { img: "/admin/amazon.png", name: "Amazon", amount: 520 },
      { img: "/admin/walmart.png", name: "Walmart", amount: 310 },
      { img: "/admin/target.png", name: "Target", amount: 220 },
      { img: "/admin/homedepot.png", name: "Home Depot", amount: 198 },
    ],
    charity: { name: "Red Cross", amount: 1120 },
  },
  {
    id: 4,
    month: "January 2026",
    dateTransferred: "February 1st, 2026",
    receiptRef: "CFG-2657-01",
    verified: false,
    stores: [
      { img: "/admin/amazon.png", name: "Amazon", amount: 520 },
      { img: "/admin/walmart.png", name: "Walmart", amount: 310 },
      { img: "/admin/target.png", name: "Target", amount: 220 },
      { img: "/admin/homedepot.png", name: "Home Depot", amount: 198 },
    ],
    charity: { name: "UNICEF", amount: 1100 },
  },
];

const PER_PAGE = 2;

const MonthlyReceipts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(receipts.length / PER_PAGE);
  const pageItems = receipts.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-[#F8F9FB] min-h-screen space-y-6">
      {pageItems.map((receipt) => (
        <ReceiptCard key={receipt.id} receipt={receipt} />
      ))}

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

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-lg border border-[#E9E9EA] flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              page === currentPage
                ? "bg-[#1A2A56] text-white"
                : "border border-[#E9E9EA] text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded-lg border border-[#E9E9EA] flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default MonthlyReceipts;
