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
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface AddStoreFormData {
  storeLogo: File | null;
  storeName: string;
  storeLink: string;
  subTextNote: string;
  howItWorks: string;
  status: string;
}

interface AddStoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: AddStoreFormData) => void;
}

export default function AddStoreModal({
  open,
  onOpenChange,
  onSubmit,
}: AddStoreModalProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddStoreFormData>({
    defaultValues: {
      storeLogo: null,
      storeName: "",
      storeLink: "",
      subTextNote: "",
      howItWorks: "",
      status: "Published",
    },
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("storeLogo", file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleFormSubmit = (data: AddStoreFormData) => {
    onSubmit(data);
    reset();
    setLogoPreview(null);
    onOpenChange(false);
  };

  const handleCancel = () => {
    reset();
    setLogoPreview(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-6 sm:p-8 w-full min-w-xl border border-[#ECEFF3] shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-[#1A2A56] text-xl sm:text-[26px] leading-[132%] tracking-[0.14px] font-semibold">
            Add New Store
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
                  errors.storeName ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("storeName", {
                  required: "Store name is required",
                })}
              />
              {errors.storeName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.storeName.message}
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
                  errors.storeLink ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("storeLink", {
                  required: "Store link is required",
                })}
              />
              {errors.storeLink && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.storeLink.message}
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
                {...register("subTextNote")}
              />
            </div>

            {/* How it works */}
            <div>
              <label className="text-sm font-medium text-[#1A2A56] mb-1.5 block">
                How it works
              </label>
              <textarea
                rows={3}
                placeholder="Tap below — Amazon opens via affiliate link. Your purchase supports charity at no extra cost to you."
                className="w-full p-3.5 rounded-[12px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] resize-none"
                {...register("howItWorks")}
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
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full p-6 rounded-[12px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Published">Published</SelectItem>
                      <SelectItem value="Unpublished">Unpublished</SelectItem>
                    </SelectContent>
                  </Select>
                )}
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
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-[#1F3266] text-white text-sm font-medium hover:bg-[#162550] transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Adding..." : "Add Store"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 rounded-full border border-[#ECEFF3] text-[#1A2A56] text-sm font-medium hover:bg-[#F6F8FA] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
