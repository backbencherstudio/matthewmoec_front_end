"use client";

import { Settings } from "lucide-react";
import { useForm } from "react-hook-form";

type AppConfigFormData = {
  appName: string;
  iosUrl: string;
  androidUrl: string;
};

interface AppConfigurationProps {
  defaultValues?: Partial<AppConfigFormData>;
  onSubmit?: (data: AppConfigFormData) => void;
}

export default function AppConfiguration({
  defaultValues,
  onSubmit,
}: AppConfigurationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppConfigFormData>({
    defaultValues: {
      appName: defaultValues?.appName ?? "CartForGood",
      iosUrl: defaultValues?.iosUrl ?? "apps.apple.com/app/cartforgood",
      androidUrl:
        defaultValues?.androidUrl ?? "play.google.com/store/apps/cartforgood",
    },
  });

  const handleFormSubmit = (data: AppConfigFormData) => {
    onSubmit?.(data);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#ECEFF3]">
        <Settings size={20} className="text-[#1A2A56]" />
        <h2 className="text-[#1A2A56] text-base md:text-2xl font-semibold leading-[116%] tracking-[0.12px]">
          App Configuration
        </h2>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div className="flex flex-col gap-4">
          {/* App Name */}
          <div>
            <label className="label-edit">App Name</label>
            <input
              type="text"
              placeholder="CartForGood"
              className={`w-full px-4 py-3 rounded-[12px] border bg-[#F5F7FC] text-sm text-[#6B7A99] placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 transition ${
                errors.appName ? "border-red-400" : "border-[#ECEFF3]"
              }`}
              {...register("appName", { required: "App name is required" })}
            />
            {errors.appName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.appName.message}
              </p>
            )}
          </div>

          {/* iOS App Store URL */}
          <div>
            <label className="label-edit">iOS App Store URL</label>
            <input
              type="text"
              placeholder="apps.apple.com/app/cartforgood"
              className={`w-full px-4 py-3 rounded-[12px] border bg-[#F6F8FA] text-sm text-[#6B7A99] placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 transition ${
                errors.iosUrl ? "border-red-400" : "border-[#ECEFF3]"
              }`}
              {...register("iosUrl", { required: "iOS URL is required" })}
            />
            {errors.iosUrl && (
              <p className="text-xs text-red-500 mt-1">
                {errors.iosUrl.message}
              </p>
            )}
          </div>

          {/* Android Play URL */}
          <div>
            <label className="label-edit">Android Play URL</label>
            <input
              type="text"
              placeholder="play.google.com/store/apps/cartforgood"
              className={`w-full px-4 py-3 rounded-[12px] border bg-[#F6F8FA] text-sm text-[#6B7A99] placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20 transition ${
                errors.androidUrl ? "border-red-400" : "border-[#ECEFF3]"
              }`}
              {...register("androidUrl", {
                required: "Android URL is required",
              })}
            />
            {errors.androidUrl && (
              <p className="text-xs text-red-500 mt-1">
                {errors.androidUrl.message}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        {/* {isDirty && (
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#ECEFF3]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-[#1F3266] text-white text-sm font-medium hover:bg-[#162550] transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )} */}
      </form>
    </div>
  );
}
