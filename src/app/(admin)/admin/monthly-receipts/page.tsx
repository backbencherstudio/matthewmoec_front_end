/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AddReceiptModal from "@/components/Admin/Receipts/AddReceiptModal";
import EditReceiptModal from "@/components/Admin/Receipts/EditReceiptModal";
import EditIcon from "@/components/icons/EditIcon";
import DeleteModal from "@/components/reusable/DeleteModal";
import {
  useDeleteReceiptMutation,
  useGetAllReceiptsQuery,
} from "@/redux/features/admin/receipts/receiptsApi";
import { CheckCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Receipt = {
  id: string;
  month: string;
  organization_or_charity: string;
  receipt_amount: string;
  status: string;
};

function ReceiptSkeletonRow() {
  return (
    <div className="grid grid-cols-3 px-5 sm:px-6 py-4 animate-pulse">
      <div className="min-w-0 flex-1 flex flex-col gap-2">
        <div className="h-4 w-16 bg-[#ECEFF3] rounded" />
        <div className="h-3 w-32 bg-[#ECEFF3] rounded" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="h-5 w-20 bg-[#ECEFF3] rounded" />
        <div className="h-5 w-16 bg-[#ECEFF3] rounded-full" />
      </div>
      <div className="flex items-center justify-end gap-3">
        <div className="h-5 w-5 bg-[#ECEFF3] rounded" />
        <div className="h-5 w-5 bg-[#ECEFF3] rounded" />
      </div>
    </div>
  );
}

export default function MonthlyReceipts() {
  const { data: receipts, isLoading } = useGetAllReceiptsQuery({});
  const [deleteReceipt] = useDeleteReceiptMutation();

  // States
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const [selectedForEdit, setSelectedForEdit] = useState<Receipt | null>(null);
  const [selectedForDelete, setSelectedForDelete] = useState<Receipt | null>(
    null,
  );

  const handleDelete = async () => {
    if (!selectedForDelete) return;

    try {
      await deleteReceipt(selectedForDelete.id).unwrap();
      toast.success("Receipt deleted successfully!");
      setDeleteOpen(false);
      setSelectedForDelete(null);
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to delete receipt";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] p-4 sm:p-6 lg:px-13 lg:py-10 relative overflow-hidden">
      {/* ... your background div ... */}

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
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-linear-to-b from-[#3555AE] to-[#203369]">
          <span className="text-white font-semibold text-xl leading-[132%] tracking-[0.1px] sm:text-base">
            Published Entries
          </span>
          <span className="text-white text-base font-medium tracking-[0.1px] leading-[132%]">
            {isLoading ? (
              <div className="h-4 w-16 bg-white/30 rounded animate-pulse" />
            ) : (
              `${receipts?.data?.length || 0} entries`
            )}
          </span>
        </div>

        <div className="divide-y divide-[#ECEFF3]">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <ReceiptSkeletonRow key={i} />
            ))
          ) : receipts?.data?.length === 0 ? (
            <div className="px-6 py-10 text-center text-[#B0B8C9] text-sm">
              No receipts found.
            </div>
          ) : (
            receipts?.data?.map((receipt: Receipt) => (
              <div
                key={receipt.id}
                className="grid grid-cols-3 px-5 sm:px-6 py-4 hover:bg-[#F6F8FA] transition-colors group"
              >
                {/* Left: month + charity */}
                <div className="min-w-0 flex-1">
                  <p className="text-[#1A2A56] font-semibold text-sm sm:text-base leading-tight">
                    {receipt.month}
                  </p>
                  <p className="text-[#8A94A6] text-xs sm:text-sm mt-0.5 truncate">
                    {receipt.organization_or_charity}
                  </p>
                </div>

                {/* Center: amount + status */}
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-[#395CBC] font-bold text-base md:text-lg">
                    ${Number(receipt.receipt_amount).toLocaleString()}
                  </span>
                  {receipt.status === "PUBLISHED" && (
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
                      setSelectedForEdit(receipt);
                      setEditOpen(true);
                    }}
                    className="text-[#385BBA] hover:text-[#1F3266] transition-colors"
                  >
                    <EditIcon />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedForDelete(receipt);
                      setDeleteOpen(true);
                    }}
                    className="text-[#F04438] hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      <AddReceiptModal
        open={addOpen}
        onOpenChange={setAddOpen}
        onSubmit={(data) => console.log(data)}
      />

      <EditReceiptModal
        open={editOpen}
        onOpenChange={setEditOpen}
        receipt={selectedForEdit}
        onSuccess={() => setSelectedForEdit(null)}
      />

      <DeleteModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Are you sure you want to remove ${selectedForDelete?.month}?`}
        description="Removing this entry will permanently delete it from your system."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
      />
    </div>
  );
}
