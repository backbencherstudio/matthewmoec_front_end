"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";

const storeOptions = [
  "Amazon",
  "Walmart",
  "Target",
  "Home Depot",
  "Etsy",
  "Chewy",
  "Wayfair",
  "eBay",
  "BestBuy",
  "Nike",
];

const monthOptions = [
  "January 2025",
  "February 2025",
  "March 2025",
  "April 2025",
  "May 2025",
  "June 2025",
  "July 2025",
  "August 2025",
  "September 2025",
  "October 2025",
  "November 2025",
  "December 2025",
  "January 2026",
  "February 2026",
  "March 2026",
];

type FormData = {
  storeName: string;
  commission: string;
  selectMonth: string;
};

interface CommissionEntryFormProps {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<FormData>;
}

export default function CommissionEntryForm({
  onSubmit,
  onCancel,
  defaultValues,
}: CommissionEntryFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      storeName: defaultValues?.storeName ?? "",
      commission: defaultValues?.commission ?? "",
      selectMonth: defaultValues?.selectMonth ?? "",
    },
  });

  return (
    <div className="bg-[#ECEFF3] p-6 rounded-[16px]">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          {/* Store Name */}
          <div className="flex-1 min-w-0">
            <label className="label-edit">Store Name</label>
            <Controller
              name="storeName"
              control={control}
              rules={{ required: "Store is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`w-full p-6 rounded-[12px] border bg-white text-sm ${
                      errors.storeName ? "border-red-400" : "border-[#ECEFF3]"
                    }`}
                  >
                    <SelectValue placeholder="Amazon" />
                  </SelectTrigger>
                  <SelectContent>
                    {storeOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.storeName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.storeName.message}
              </p>
            )}
          </div>

          {/* Commission */}
          <div className="flex-1 min-w-0">
            <label className="label-edit">Commission</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B0B8C9] text-sm font-medium pointer-events-none">
                $
              </span>
              <input
                type="number"
                step="0.01"
                placeholder="520"
                className={`w-full pl-7 pr-4 py-3.5 rounded-[12px] border bg-white text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                  errors.commission ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("commission", {
                  required: "Commission is required",
                })}
              />
            </div>
            {errors.commission && (
              <p className="text-xs text-red-500 mt-1">
                {errors.commission.message}
              </p>
            )}
          </div>

          {/* Select Month */}
          <div className="flex-1 min-w-0">
            <label className="label-edit">Select Month</label>
            <Controller
              name="selectMonth"
              control={control}
              rules={{ required: "Month is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`w-full p-6 rounded-[12px] border bg-white text-sm ${
                      errors.selectMonth ? "border-red-400" : "border-[#ECEFF3]"
                    }`}
                  >
                    <SelectValue placeholder="January 2025" />
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
            {errors.selectMonth && (
              <p className="text-xs text-red-500 mt-1">
                {errors.selectMonth.message}
              </p>
            )}
          </div>
        </div>
        {/* Actions */}
        <div className="flex items-center mt-6 gap-3  justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-3 rounded-full border border-[#ECEFF3] bg-white text-[#1A2A56] text-sm font-medium hover:bg-[#F6F8FA] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-3 rounded-full bg-[#8792A8] text-white text-sm font-medium hover:bg-[#1F3266] transition-colors disabled:opacity-60 whitespace-nowrap cursor-pointer"
          >
            {isSubmitting ? "Saving..." : "Save Entry"}
          </button>
        </div>
      </form>
    </div>
  );
}
