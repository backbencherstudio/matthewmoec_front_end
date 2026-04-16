/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllStoresQuery } from "@/redux/features/admin/store/storeApi";
import { useCreateStoreCommissionMutation } from "@/redux/features/admin/storeCommission/storeCommissionApi";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

type Store = {
  id: string;
  name: string;
};

type FormData = {
  storeName: string; // stores the store id
  commission: string;
  date: string;
};

interface CommissionEntryFormProps {
  defaultValues?: Partial<FormData>;
}

export default function CommissionEntryForm({
  defaultValues,
}: CommissionEntryFormProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { data: storeData } = useGetAllStoresQuery({ page: 1, limit: 7 });
  const stores: Store[] = storeData?.data ?? [];

  const filteredStores = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const [createStoreCommission] = useCreateStoreCommissionMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      storeName: defaultValues?.storeName ?? "",
      commission: defaultValues?.commission ?? "",
      date: defaultValues?.date ?? "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const payload = {
      store_id: data.storeName,
      commission: parseFloat(data.commission),
      date: data.date,
    };

    try {
      const response = await createStoreCommission(payload).unwrap();
      if (response?.success) {
        toast.success(
          response.message || "Commission entry created successfully",
        );
        reset();
      }
    } catch (error) {
      const errorMessage =
        (error as any)?.data?.message || "Commission entry failed";
      toast.error(errorMessage);
    }
  };

  const onCancel = () => {
    reset();
  };

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
              render={({ field }) => {
                const selectedStore = stores.find((s) => s.id === field.value);

                return (
                  <div className="relative">
                    {/* Trigger */}
                    <button
                      type="button"
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setSearch("");
                      }}
                      className={`w-full p-3 rounded-[12px] border bg-white text-sm flex items-center justify-between gap-2 ${
                        errors.storeName ? "border-red-400" : "border-[#ECEFF3]"
                      }`}
                    >
                      {selectedStore ? (
                        <span className="text-black truncate">
                          {selectedStore.name}
                        </span>
                      ) : (
                        <span className="text-gray-400">Select a store</span>
                      )}
                      <svg
                        className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                          open ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {open && (
                      <div className="absolute z-20 mt-1 w-full bg-white border border-[#ECEFF3] rounded-[12px] shadow-lg overflow-hidden">
                        {/* Search Input */}
                        <div className="p-2 border-b border-[#ECEFF3]">
                          <div className="flex items-center gap-2 px-3 py-2 rounded-[8px] bg-[#F6F8FA]">
                            <svg
                              className="w-4 h-4 text-gray-400 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                              />
                            </svg>
                            <input
                              type="text"
                              autoFocus
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Search store..."
                              className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Store List */}
                        <ul className="max-h-49 overflow-y-auto">
                          {filteredStores.length > 0 ? (
                            filteredStores.map((s) => (
                              <li
                                key={s.id}
                                onClick={() => {
                                  field.onChange(s.id);
                                  setOpen(false);
                                  setSearch("");
                                }}
                                className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${
                                  field.value === s.id
                                    ? "bg-blue-50 text-[#1F3266] font-medium"
                                    : "text-gray-700"
                                }`}
                              >
                                <span className="truncate">{s.name}</span>
                                {field.value === s.id && (
                                  <svg
                                    className="w-4 h-4 ml-auto text-[#1F3266] shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-4 text-sm text-gray-400 text-center">
                              No stores found
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Backdrop to close dropdown */}
                    {open && (
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => {
                          setOpen(false);
                          setSearch("");
                        }}
                      />
                    )}
                  </div>
                );
              }}
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
                className={`w-full pl-7 pr-4 py-3 rounded-[12px] border bg-white text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
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

          {/* Date */}
          <div className="flex-1 min-w-0">
            <label className="label-edit">Date</label>
            <input
              type="date"
              className={`w-full pl-4 pr-4 py-3 rounded-[12px] border bg-white text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                errors.date ? "border-red-400" : "border-[#ECEFF3]"
              }`}
              {...register("date", {
                required: "Date is required",
              })}
            />
            {errors.date && (
              <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center mt-6 gap-3 justify-end">
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
