/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUpdateReceiptMutation } from "@/redux/features/admin/receipts/receiptsApi";

import { FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

const monthOptions = [
  "January 2026",
  "February 2026",
  "March 2026",
  "April 2026",
  "May 2026",
  "June 2026",
  "July 2026",
  "August 2026",
  "September 2026",
  "October 2026",
];

type FormData = {
  receiptMonth: string;
  charity: string;
  amount: string;
  proofFile: File | null;
  status: string;
};

type Receipt = {
  id: string;
  month: string;
  organization_or_charity: string;
  receipt_amount: string;
  status: string;
  proof_of_receipt?: string;
};

interface EditReceiptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  receipt: Receipt | null;
  onSuccess?: () => void;
}

export default function EditReceiptModal({
  open,
  onOpenChange,
  receipt,
  onSuccess,
}: EditReceiptModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);

  const [updateReceipt, { isLoading }] = useUpdateReceiptMutation();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      receiptMonth: "",
      charity: "",
      amount: "",
      proofFile: null,
      status: "PUBLISHED",
    },
  });

  // Pre-populate form when receipt changes
  useEffect(() => {
    if (receipt) {
      reset({
        receiptMonth: receipt.month ?? "",
        charity: receipt.organization_or_charity ?? "",
        amount: receipt.receipt_amount ?? "",
        proofFile: null,
        status: receipt.status ?? "PUBLISHED",
      });
    }
  }, [receipt, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    setValue("proofFile", file);
  };

  const handleFormSubmit = async (data: FormData) => {
    if (!receipt?.id) return;

    try {
      const formData = new FormData();

      if (data?.proofFile) {
        formData.append("proof_of_receipt", data.proofFile);
      }
      formData.append("month", data.receiptMonth);
      formData.append("organization_or_charity", data.charity);
      formData.append("receipt_amount", data.amount);
      formData.append("status", data.status);

      const response = await updateReceipt({
        id: receipt.id,
        data: formData,
      }).unwrap();

      if (response?.success) {
        toast.success(response?.message || "Receipt updated successfully");
        onSuccess?.();
        reset();
        setUploadedFile(null);
        onOpenChange(false);
      }
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "Update failed";
      toast.error(errorMessage);
    }
  };

  const handleCancel = () => {
    reset();
    setUploadedFile(null);
    onOpenChange(false);
  };

  const handleModalOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setUploadedFile(null);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleModalOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-6 w-full min-w-xl border border-[#ECEFF3] shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-[#1A2A56] text-xl sm:text-[24px] font-bold leading-[132%] tracking-[0.14px]">
            Edit Receipt Entry
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className="flex flex-col gap-4">
            {/* Receipt Month */}
            <div>
              <label className="label-edit">Receipt Month</label>
              <Controller
                name="receiptMonth"
                control={control}
                rules={{ required: "Please select a month" }}
                render={({ field }) => (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenMonth((prev) => !prev)}
                      className={`w-full p-3.5 rounded-[12px] border bg-[#F6F8FA] text-sm text-left flex items-center justify-between ${
                        errors.receiptMonth
                          ? "border-red-400"
                          : "border-[#ECEFF3]"
                      } ${field.value ? "text-[#1A2A56]" : "text-[#B0B8C9]"}`}
                    >
                      <span>{field.value || "Select Month"}</span>
                      <svg
                        className={`w-4 h-4 text-[#8A94A6] transition-transform duration-200 ${
                          openMonth ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {openMonth && (
                      <ul className="absolute z-50 mt-1.5 w-full bg-white border border-[#ECEFF3] rounded-[12px] shadow-sm overflow-y-auto max-h-56">
                        {monthOptions.map((m) => (
                          <li
                            key={m}
                            onClick={() => {
                              field.onChange(m);
                              setOpenMonth(false);
                            }}
                            className={`px-4 py-2.5 text-sm cursor-pointer flex items-center justify-between transition-colors ${
                              field.value === m
                                ? "bg-[#F6F8FA] text-[#1A2A56] font-medium"
                                : "text-[#1A2A56] hover:bg-[#F6F8FA]"
                            }`}
                          >
                            {m}
                            {field.value === m && (
                              <svg
                                className="w-4 h-4 text-[#1F3266]"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M3 8l3.5 3.5L13 5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              />
              {errors.receiptMonth && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.receiptMonth.message}
                </p>
              )}
            </div>

            {/* Organization / Charity */}
            <div>
              <label className="label-edit">Organization/ Charity</label>
              <input
                type="text"
                placeholder="Feeding America"
                className={`w-full p-3.5 rounded-[12px] border bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                  errors.charity ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("charity", {
                  required: "Charity name is required",
                })}
              />
              {errors.charity && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.charity.message}
                </p>
              )}
            </div>

            {/* Receipt Amount */}
            <div>
              <label className="label-edit">Receipt Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B0B8C9] text-sm font-medium">
                  $
                </span>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.0"
                  className={`w-full pl-8 pr-4 py-3.5 rounded-[12px] border bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                    errors.amount ? "border-red-400" : "border-[#ECEFF3]"
                  }`}
                  {...register("amount", { required: "Amount is required" })}
                />
              </div>
              {errors.amount && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>

            {/* Proof of Receipt */}
            <div>
              <label className="label-edit">Proof of Receipt</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full rounded-[14px] border border-dashed border-[#ECEFF3] bg-[#F6F8FA] py-6 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-[#eef1f6] transition-colors"
              >
                <FileText size={28} className="text-[#B0B8C9]" />
                <p className="text-[#1A2A56] text-sm font-medium">
                  {uploadedFile
                    ? uploadedFile.name
                    : receipt?.proof_of_receipt
                      ? "Current file attached"
                      : "Official Receipt"}
                </p>
                <p className="text-[#B0B8C9] text-xs">
                  {uploadedFile
                    ? `${(uploadedFile.size / 1024).toFixed(1)} KB`
                    : receipt?.proof_of_receipt
                      ? "Click to replace the existing file"
                      : "Uploaded by admin. Publicly Visible"}
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Status */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                Status
              </label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => {
                  const options = ["PUBLISHED", "UNPUBLISHED"];
                  return (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setOpenSelect((prev) => !prev)}
                        className="w-full p-3.5 rounded-[12px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm text-left flex items-center justify-between text-[#1A2A56]"
                      >
                        <span>{field.value || "Select status"}</span>
                        <svg
                          className={`w-4 h-4 text-[#8A94A6] transition-transform duration-200 ${
                            openSelect ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {openSelect && (
                        <ul className="absolute z-50 mt-1.5 w-full bg-white border border-[#ECEFF3] rounded-[12px] shadow-sm overflow-hidden">
                          {options.map((option) => (
                            <li
                              key={option}
                              onClick={() => {
                                field.onChange(option);
                                setOpenSelect(false);
                              }}
                              className={`px-4 py-2.5 text-sm cursor-pointer flex items-center justify-between transition-colors ${
                                field.value === option
                                  ? "bg-[#F6F8FA] text-[#1A2A56] font-medium"
                                  : "text-[#1A2A56] hover:bg-[#F6F8FA]"
                              }`}
                            >
                              {option}
                              {field.value === option && (
                                <svg
                                  className="w-4 h-4 text-[#1F3266]"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M3 8l3.5 3.5L13 5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 rounded-full bg-linear-to-b from-[#3555AE] to-[#203369] text-white text-sm font-medium hover:bg-[#162550] transition-colors disabled:opacity-60 cursor-pointer"
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 rounded-full border border-[#ECEFF3] text-[#1A2A56] text-sm font-medium hover:bg-[#F6F8FA] transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
