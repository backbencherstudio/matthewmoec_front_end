/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ResetIcon from "@/components/icons/ResetIcon";
import ShearMessageIcon from "@/components/icons/ShearMessageIcon";
import {
  useGetAppConfigurationQuery,
  useUpdateAppConfigurationMutation,
} from "@/redux/features/admin/settings/settingsApi";
import { InfoIcon, Settings } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type AppConfigFormData = {
  app_name: string;
  ios_app_store_url: string;
  android_play_store_url: string;
  share_message: string;
  how_it_works: string;
};

function SettingsSkeleton() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-13 lg:py-10 animate-pulse">
      <div className="h-10 w-80 bg-[#ECEFF3] rounded mb-8" />

      <div className="h-8 w-64 bg-[#ECEFF3] rounded mb-6" />
      <div className="h-40 bg-[#F8FAFB] border border-[#ECEFF3] rounded-[16px] p-6 mb-10" />

      <div className="h-8 w-48 bg-[#ECEFF3] rounded mb-4" />
      <div className="h-40 bg-[#F8FAFB] border border-[#ECEFF3] rounded-[16px] p-6 mb-10" />

      <div className="mt-10 bg-white rounded-2xl border border-[#ECEFF3] p-6">
        <div className="h-8 w-52 bg-[#ECEFF3] rounded mb-6" />
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <div className="h-5 w-40 bg-[#ECEFF3] rounded mb-3" />
              <div className="h-12 bg-[#F6F8FA] rounded-[12px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  // const [openSuccess, setOpenSuccess] = useState(false);

  const { data, isLoading, error } = useGetAppConfigurationQuery(undefined);
  const [updateAppConfiguration, { isLoading: isUpdating }] =
    useUpdateAppConfigurationMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppConfigFormData>();

  // Populate form when data loads
  useEffect(() => {
    if (data?.data) {
      reset({
        app_name: data.data.app_name || "CartForGood",
        ios_app_store_url: data.data.ios_app_store_url || "",
        android_play_store_url: data.data.android_play_store_url || "",
        share_message: data.data.share_message || "",
        how_it_works: data.data.how_it_works || "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData: AppConfigFormData) => {
    try {
      const response = await updateAppConfiguration(formData).unwrap();
      if (response?.success) {
        toast.success(response?.message || "Settings updated successfully!");
        // setOpenSuccess(true);
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update settings";
      toast.error(errorMessage);
    }
  };

  const handleReset = () => {
    if (data?.data) {
      reset({
        app_name: data.data.app_name || "CartForGood",
        ios_app_store_url: data.data.ios_app_store_url || "",
        android_play_store_url: data.data.android_play_store_url || "",
        share_message: data.data.share_message || "",
        how_it_works: data.data.how_it_works || "",
      });
      toast.info("Form reset to current saved values");
    }
  };

  if (isLoading) return <SettingsSkeleton />;

  if (error) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">Failed to load settings</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-[#1F3266] text-white rounded-full"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-13 lg:py-10 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-lg md:text-xl lg:text-[32px] text-[#1A2A56] leading-[132%] tracking-[0.16px] font-semibold">
          Setting - App Configuration
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-8 py-3 bg-[#ECEFF3] border border-[#E9E9EA] rounded-full hover:bg-[#E9E9EA] transition-colors cursor-pointer"
          >
            <ResetIcon />
            <span className="text-[#1A2A56] text-base font-medium leading-[124%] tracking-[0.08px]">
              Reset
            </span>
          </button>

          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isUpdating}
            className="px-8 py-3 bg-linear-to-b from-[#3454AC] to-[#1E3061] text-white text-base leading-[124%] tracking-[0.08px] font-medium rounded-full disabled:opacity-70 cursor-pointer"
          >
            {isUpdating ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </div>

      {/* Share Message Editor - Now Editable */}
      <div className="mb-10">
        <h1 className="flex items-center gap-2 mb-4">
          <ShearMessageIcon />
          <span className="text-[#1A2A56] text-xl font-medium leading-[132%] tracking-[0.1px]">
            Share Message Editor
          </span>
        </h1>
        <div className="p-6 bg-[#F8FAFB] border border-[#ECEFF3] rounded-[16px]">
          <label className="text-[#1A2A56] text-lg font-medium mb-3 block">
            Message
          </label>
          <textarea
            {...register("share_message", {
              required: "Share message is required",
            })}
            rows={4}
            className={`w-full px-4 py-3 rounded-[12px] border bg-white text-sm text-[#6B7A99] resize-y min-h-30 focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
              errors.share_message ? "border-red-400" : "border-[#ECEFF3]"
            }`}
            placeholder="Support trusted charities by shopping through our partner stores..."
          />
          {errors.share_message && (
            <p className="text-xs text-red-500 mt-1">
              {errors.share_message.message}
            </p>
          )}
        </div>
      </div>

      {/* How It Works - Now Editable */}
      <div className="mb-10">
        <h1 className="flex items-center gap-2 mb-4">
          <button className="p-1.5 bg-[#C7D9F3] rounded-full">
            <InfoIcon className="h-3 w-3" />
          </button>
          <span className="text-xl font-medium leading-[132%] tracking-[0.1px] text-[#1A2A56]">
            How It Works
          </span>
        </h1>
        <div className="p-6 border border-[#ECEFF3] bg-[#F8FAFB] rounded-[16px]">
          <label className="text-[#1A2A56] text-lg font-medium mb-3 block">
            Description
          </label>
          <textarea
            {...register("how_it_works", {
              required: "How it works text is required",
            })}
            rows={4}
            className={`w-full px-4 py-3 rounded-[12px] border bg-white text-sm text-[#6B7A99] resize-y min-h-30 focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
              errors.how_it_works ? "border-red-400" : "border-[#ECEFF3]"
            }`}
            placeholder="The stores pay us a small commission when you shop through our links..."
          />
          {errors.how_it_works && (
            <p className="text-xs text-red-500 mt-1">
              {errors.how_it_works.message}
            </p>
          )}
        </div>
      </div>

      {/* App Configuration Form */}
      <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#ECEFF3]">
          <Settings size={20} className="text-[#1A2A56]" />
          <h2 className="text-[#1A2A56] text-base md:text-2xl font-semibold leading-[116%] tracking-[0.12px]">
            App Configuration
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            {/* App Name */}
            <div>
              <label className="label-edit">App Name</label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-[12px] border bg-[#F6F8FA] text-sm text-[#6B7A99] placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                  errors.app_name ? "border-red-400" : "border-[#ECEFF3]"
                }`}
                {...register("app_name", { required: "App name is required" })}
              />
              {errors.app_name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.app_name.message}
                </p>
              )}
            </div>

            {/* iOS URL */}
            <div>
              <label className="label-edit">iOS App Store URL</label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-[12px] border bg-[#F6F8FA] text-sm text-[#6B7A99] placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                  errors.ios_app_store_url
                    ? "border-red-400"
                    : "border-[#ECEFF3]"
                }`}
                {...register("ios_app_store_url", {
                  required: "iOS URL is required",
                })}
              />
              {errors.ios_app_store_url && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.ios_app_store_url.message}
                </p>
              )}
            </div>

            {/* Android URL */}
            <div>
              <label className="label-edit">Android Play Store URL</label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-[12px] border bg-[#F6F8FA] text-sm text-[#6B7A99] placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 ${
                  errors.android_play_store_url
                    ? "border-red-400"
                    : "border-[#ECEFF3]"
                }`}
                {...register("android_play_store_url", {
                  required: "Android URL is required",
                })}
              />
              {errors.android_play_store_url && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.android_play_store_url.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* <SaveSuccessModal
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        onSave={() => console.log("Save confirmed")}
      /> */}
    </div>
  );
}
