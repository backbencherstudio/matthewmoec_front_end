/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUpdateStoreMutation } from "@/redux/features/admin/store/storeApi";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditStoreFormData {
  logo: File | null;
  name: string;
  link: string;
  sub_text_note: string;
  how_it_works: string;
  status: string;
}

interface StoreData {
  id: string;
  name: string;
  link: string;
  logo_url: string;
  sub_text_note: string;
  how_it_works: string;
  status: string;
}

interface EditStoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  store: StoreData | null;
}

export default function EditStoreModal({
  open,
  onOpenChange,
  store,
}: EditStoreModalProps) {
  const [openSelect, setOpenSelect] = useState(false);
  const [updateStore, { isLoading }] = useUpdateStoreMutation();
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EditStoreFormData>({
    defaultValues: {
      logo: null,
      name: "",
      link: "",
      sub_text_note: "",
      how_it_works: "",
      status: "PUBLISHED",
    },
  });

  // Populate form and logo preview when store data changes
  useEffect(() => {
    if (store) {
      reset({
        logo: null,
        name: store.name,
        link: store.link,
        sub_text_note: store.sub_text_note,
        how_it_works: store.how_it_works,
        status: store.status,
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLogoPreview(store.logo_url);
    }
  }, [store, reset]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("logo", file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleFormSubmit = async (data: EditStoreFormData) => {
    if (!store) return;
    try {
      const formData = new FormData();
      if (data.logo) formData.append("logo", data.logo);
      formData.append("name", data.name);
      formData.append("link", data.link);
      formData.append("sub_text_note", data.sub_text_note);
      formData.append("how_it_works", data.how_it_works);
      formData.append("status", data.status);

      const response = await updateStore({
        id: store.id,
        body: formData,
      }).unwrap();
      if (response?.success) {
        toast.success(response.message || "Store updated successfully");
        onOpenChange(false);
      }
    } catch (error) {
      const errorMessage = (error as any)?.data?.message || "Update failed";
      toast.error(errorMessage);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-6 sm:p-8 w-full min-w-xl border border-[#ECEFF3] shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-[#1A2A56] text-xl sm:text-[26px] leading-[132%] tracking-[0.14px] font-semibold">
            Edit Store
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className="flex flex-col gap-4">
            {/* Store Logo */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                Store Logo
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full rounded-[12px] border border-dashed border-[#ECEFF3] bg-[#F6F8FA] py-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#eef1f6] transition-colors"
              >
                {logoPreview ? (
                  <Image
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-8 h-8 object-contain rounded"
                    height={100}
                    width={100}
                  />
                ) : (
                  <ImageIcon size={20} className="text-[#8A94A6] shrink-0" />
                )}
                <span className="text-[#8A94A6] text-sm">
                  {logoPreview ? "Change Logo" : "Upload Logo"}
                </span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoChange}
              />
            </div>

            {/* Store Name */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                Store name
              </label>
              <input
                type="text"
                placeholder="e.g Amazon"
                className={`w-full p-3.5 rounded-[12px] border bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] ${
                  errors.name ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("name", {
                  required: "Store name is required",
                })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Store Link */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                Store Link
              </label>
              <input
                type="url"
                placeholder="https://target.com/ref?aid=123"
                className={`w-full p-3.5 rounded-[12px] border bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] ${
                  errors.link ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("link", {
                  required: "Store link is required",
                })}
              />
              {errors.link && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.link.message}
                </p>
              )}
            </div>

            {/* Sub text note */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                Sub text note
              </label>
              <input
                type="text"
                placeholder="Use for holiday campaigns."
                className="w-full p-3.5 rounded-[12px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9]"
                {...register("sub_text_note")}
              />
            </div>

            {/* How it works */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                How it works
              </label>
              <textarea
                rows={3}
                placeholder="Tap below — Amazon opens via affiliate link."
                className="w-full p-3.5 rounded-[12px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] resize-none"
                {...register("how_it_works")}
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
              <p className="text-xs text-[#8A94A6] mt-1.5">
                Entities will be marked as Published
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 rounded-full bg-[#1F3266] text-white text-sm font-medium hover:bg-[#162550] transition-colors disabled:opacity-60 cursor-pointer"
            >
              {isLoading ? "Updating..." : "Update Store"}
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
