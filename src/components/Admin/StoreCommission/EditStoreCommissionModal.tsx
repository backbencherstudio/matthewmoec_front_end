/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useUpdateStoreCommissionMutation } from "@/redux/features/admin/storeCommission/storeCommissionApi";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

type Store = {
  id: string;
  name: string;
};

type FormData = {
  store_id: string;
  commission: string;
  date: string;
};

interface EditStoreCommissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  commission: any;
  stores: Store[];
  onSuccess?: () => void;
}

export default function EditStoreCommissionModal({
  open,
  onOpenChange,
  commission,
  stores,
  onSuccess,
}: EditStoreCommissionModalProps) {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [updateStoreCommission] = useUpdateStoreCommissionMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // Populate form when modal opens
  useEffect(() => {
    if (open && commission) {
      reset({
        store_id: commission.store_id,
        commission: commission.commission.toString(),
        date: commission.date ? commission.date.split("T")[0] : "",
      });
    }
  }, [open, commission, reset]);

  const filteredStores = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const onSubmit = async (data: FormData) => {
    if (!commission?.id) return;

    setIsUpdating(true);

    try {
      const response = await updateStoreCommission({
        id: commission.id,
        data: {
          store_id: data.store_id,
          commission: parseFloat(data.commission),
          date: data.date,
        },
      }).unwrap();

      if (response?.success) {
        toast.success(response.message || "Commission updated successfully!");
        onSuccess?.();
        onOpenChange(false);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update commission");
    } finally {
      setIsUpdating(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden">
        <div className="px-6 py-5 border-b">
          <h3 className="text-[#1A2A56] text-xl font-semibold">
            Edit Commission Entry
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="space-y-6">
            {/* Store Name - Beautiful Searchable Dropdown (Same as Create) */}
            <div>
              <label className="label-edit">Store Name</label>
              <Controller
                name="store_id"
                control={control}
                rules={{ required: "Store is required" }}
                render={({ field }) => {
                  const selectedStore = stores.find(
                    (s) => s.id === field.value,
                  );

                  return (
                    <div className="relative">
                      {/* Trigger Button */}
                      <button
                        type="button"
                        onClick={() => {
                          setDropdownOpen((prev) => !prev);
                          setSearch("");
                        }}
                        className={`w-full p-3 rounded-[12px] border bg-white text-sm flex items-center justify-between gap-2 ${
                          errors.store_id
                            ? "border-red-400"
                            : "border-[#ECEFF3]"
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
                            dropdownOpen ? "rotate-180" : ""
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
                      {dropdownOpen && (
                        <div className="absolute z-30 mt-1 w-full bg-white border border-[#ECEFF3] rounded-[12px] shadow-lg overflow-hidden">
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
                          <ul className="max-h-60 overflow-y-auto">
                            {filteredStores.length > 0 ? (
                              filteredStores.map((s) => (
                                <li
                                  key={s.id}
                                  onClick={() => {
                                    field.onChange(s.id);
                                    setDropdownOpen(false);
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
                      {dropdownOpen && (
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => {
                            setDropdownOpen(false);
                            setSearch("");
                          }}
                        />
                      )}
                    </div>
                  );
                }}
              />
              {errors.store_id && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.store_id.message}
                </p>
              )}
            </div>

            {/* Commission */}
            <div>
              <label className="label-edit">Commission Amount ($)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B0B8C9] text-sm font-medium pointer-events-none">
                  $
                </span>
                <input
                  type="number"
                  step="0.01"
                  {...control.register("commission", {
                    required: "Commission is required",
                  })}
                  className={`w-full pl-7 pr-4 py-3 rounded-[12px] border bg-white text-sm ${
                    errors.commission ? "border-red-400" : "border-[#ECEFF3]"
                  }`}
                />
              </div>
              {errors.commission && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.commission.message}
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="label-edit">Date</label>
              <input
                type="date"
                {...control.register("date", { required: "Date is required" })}
                className={`w-full p-3 rounded-[12px] border bg-white ${
                  errors.date ? "border-red-400" : "border-[#ECEFF3]"
                }`}
              />
              {errors.date && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 py-3 border border-[#ECEFF3] rounded-full text-[#1A2A56] font-medium hover:bg-[#F6F8FA] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              className="flex-1 py-3 bg-[#1F3266] text-white rounded-full font-medium disabled:opacity-70 cursor-pointer"
            >
              {isUpdating ? "Updating..." : "Update Commission"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
