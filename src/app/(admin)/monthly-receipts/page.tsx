/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AddReceiptModal from "@/components/Admin/AddReceiptModal";
import EditIcon from "@/components/icons/EditIcon";
import EditModal from "@/components/reusable/EditModal";
import { CheckCircle, Trash2 } from "lucide-react";
import { useState } from "react";

type Receipt = {
  id: number;
  month: string;
  year: number;
  charity: string;
  amount: number;
  verified: boolean;
};

const initialReceipts: Receipt[] = [
  {
    id: 1,
    month: "Mar",
    year: 2026,
    charity: "Feeding America",
    amount: 1248,
    verified: true,
  },
  {
    id: 2,
    month: "Feb",
    year: 2026,
    charity: "St. Jude Children's",
    amount: 980,
    verified: true,
  },
  {
    id: 3,
    month: "Jan",
    year: 2026,
    charity: "Feeding America",
    amount: 1104,
    verified: true,
  },
  {
    id: 4,
    month: "Dec",
    year: 2025,
    charity: "Salvation Army",
    amount: 2011,
    verified: true,
  },
  {
    id: 5,
    month: "Nov",
    year: 2025,
    charity: "Feeding America",
    amount: 876,
    verified: true,
  },
  {
    id: 6,
    month: "Oct",
    year: 2025,
    charity: "Red Cross",
    amount: 743,
    verified: true,
  },
];

const receiptFields = [
  {
    name: "month",
    label: "Month",
    type: "text" as const,
    placeholder: "e.g. Mar",
    validation: { required: "Month is required" },
  },
  {
    name: "year",
    label: "Year",
    type: "text" as const,
    placeholder: "e.g. 2026",
    validation: { required: "Year is required" },
  },
  {
    name: "charity",
    label: "Charity Name",
    type: "text" as const,
    placeholder: "e.g. Feeding America",
    validation: { required: "Charity name is required" },
  },
  {
    name: "amount",
    label: "Amount ($)",
    type: "text" as const,
    placeholder: "e.g. 1248",
    validation: { required: "Amount is required" },
  },
  {
    name: "verified",
    label: "Status",
    type: "select" as const,
    options: [
      { label: "Verified", value: "true" },
      { label: "Unverified", value: "false" },
    ],
  },
];

export default function MonthlyReceipts() {
  const [receipts, setReceipts] = useState<Receipt[]>(initialReceipts);
  const [editOpen, setEditOpen] = useState(false);
  const [, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [selected, setSelected] = useState<Receipt | null>(null);

  const handleUpdate = (data: any) => {
    if (!selected) return;
    setReceipts((prev) =>
      prev.map((r) =>
        r.id === selected.id
          ? {
              ...r,
              month: data.month,
              year: Number(data.year),
              charity: data.charity,
              amount: Number(data.amount),
              verified: data.verified === "true",
            }
          : r,
      ),
    );
  };

  const editDefaultValues = selected
    ? {
        month: selected.month,
        year: String(selected.year),
        charity: selected.charity,
        amount: String(selected.amount),
        verified: String(selected.verified),
      }
    : {};

  return (
    <div className="min-h-screen bg-[#F6F8FA] p-4 sm:p-6 lg:px-13 lg:py-10 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-[#1A2A56] text-2xl sm:text-[28px] font-bold leading-tight">
          Monthly Receipts List
        </h1>
        <button
          onClick={() => setAddOpen(true)}
          className="self-start sm:self-auto px-8 py-4 rounded-full bg-linear-to-b from-[#3555AE] to-[#203369] text-white text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
        >
          Add Receipt Entry
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-[#ECEFF3] overflow-hidden">
        {/* Table Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-linear-to-b from-[#3555AE] to-[#203369]">
          <span className="text-white font-semibold text-xl leading-[132%] tracking-[0.1px] sm:text-base">
            Published Entries
          </span>
          <span className="text-white text-base font-medium tracking-[0.1px] leading-[132%]">
            {receipts.length} entries
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#ECEFF3]">
          {receipts.length === 0 && (
            <div className="px-6 py-10 text-center text-[#B0B8C9] text-sm">
              No receipts found.
            </div>
          )}
          {receipts.map((receipt) => (
            <div
              key={receipt.id}
              className="grid grid-cols-3 px-5 sm:px-6 py-4 hover:bg-[#F6F8FA] transition-colors group"
            >
              {/* Left: date + charity */}
              <div className="min-w-0 flex-1">
                <p className="text-[#1A2A56] font-semibold text-sm sm:text-base leading-tight">
                  {receipt.month} {receipt.year}
                </p>
                <p className="text-[#8A94A6] text-xs sm:text-sm mt-0.5 truncate">
                  {receipt.charity}
                </p>
              </div>

              {/* Center: amount + verified */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-[#395CBC] font-bold text-base md:text-lg">
                  ${receipt.amount.toLocaleString()}
                </span>

                {receipt.verified && (
                  <span className="inline-flex items-center gap-1 text-[#09332B] text-xs font-medium bg-[#ECEFF3] px-2 py-1 rounded-full w-fit">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                )}
              </div>

              {/* Right: actions */}
              <div className="flex items-center justify-end gap-3 shrink-0">
                <button
                  onClick={() => {
                    setSelected(receipt);
                    setEditOpen(true);
                  }}
                  className="text-[#385BBA] hover:text-[#1F3266] transition-colors cursor-pointer"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => {
                    setSelected(receipt);
                    setDeleteOpen(true);
                  }}
                  className="text-[#F04438] hover:text-red-700 transition-colors cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      <EditModal
        open={editOpen}
        onOpenChange={setEditOpen}
        title="Edit Receipt"
        fields={receiptFields}
        defaultValues={editDefaultValues}
        onSubmit={handleUpdate}
      />

      <AddReceiptModal
        open={addOpen}
        onOpenChange={setAddOpen}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
}
