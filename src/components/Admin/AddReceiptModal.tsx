"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText } from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

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

const statusOptions = [
  { label: "Draft", value: "draft", hint: "Entities will be marked as draft" },
  {
    label: "Published",
    value: "published",
    hint: "Entities will be marked as Published",
  },
  {
    label: "Unpublished",
    value: "unpublished",
    hint: "Entities will be marked as Unpublished",
  },
];

type FormData = {
  receiptMonth: string;
  charity: string;
  amount: string;
  proofFile: File | null;
  status: string;
};

interface AddReceiptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormData) => void;
}

export default function AddReceiptModal({
  open,
  onOpenChange,
  onSubmit,
}: AddReceiptModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      receiptMonth: "",
      charity: "",
      amount: "",
      proofFile: null,
      status: "draft",
    },
  });

  const selectedStatus = useWatch({ control, name: "status" });
  const statusHint =
    statusOptions.find((s) => s.value === selectedStatus)?.hint ?? "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    setValue("proofFile", file);
  };

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
    setUploadedFile(null);
    onOpenChange(false);
  };

  const handleCancel = () => {
    reset();
    setUploadedFile(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-6 w-full min-w-xl border border-[#ECEFF3] shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-[#1A2A56] text-xl sm:text-[24px] font-bold leading-[132%] tracking-[0.14px]">
            Add Receipt Entry
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
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={`w-full p-6 rounded-[12px] border bg-[#F6F8FA] text-sm ${
                        errors.receiptMonth
                          ? "border-red-400"
                          : "border-[#ECEFF3]"
                      }`}
                    >
                      <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent className="max-h-56">
                      {monthOptions.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                  {uploadedFile ? uploadedFile.name : "Official Receipt"}
                </p>
                <p className="text-[#B0B8C9] text-xs">
                  {uploadedFile
                    ? `${(uploadedFile.size / 1024).toFixed(1)} KB`
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
              <label className="label-edit">Status</label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full p-6 rounded-[12px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {statusHint && (
                <p className="text-sm text-[#8792A8] leading-[100%] tracking-[0.07px] mt-4 mb-6">
                  {statusHint}
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-linear-to-b from-[#3555AE] to-[#203369] text-white text-sm font-medium hover:bg-[#162550] transition-colors disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "Saving..." : "Save as Draft"}
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
