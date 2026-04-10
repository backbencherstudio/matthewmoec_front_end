"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type EnterPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

export default function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnterPasswordFormValues>();

  const onSubmit = async (data: EnterPasswordFormValues) => {
    // Handle password update logic here
    console.log(data);
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute -bottom-20 -right-30 rotate-45 blur-[50px]" />
      <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-10 w-full max-w-sm border border-[#ECEFF3] shadow-sm">
        <h1 className="text-[#1A2A56] text-xl md:text-2xl font-semibold text-center leading-[116%] tracking-[0.12px] mb-6">
          Enter Password
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* New Password */}
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="matthewmoec123#$%"
                className={`w-full p-4 rounded-full border bg-white text-sm focus:outline-none focus:ring-0 ${
                  errors.password ? "border-red-400" : "border-[#E9E9EA]"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOffIcon size={16} />
                ) : (
                  <EyeIcon size={16} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500 pl-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="matthewmoec123#$%"
                className={`w-full p-4 rounded-full border bg-white text-sm focus:outline-none focus:ring-0 ${
                  errors.confirmPassword ? "border-red-400" : "border-[#E9E9EA]"
                }`}
                {...register("confirmPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeOffIcon size={16} />
                ) : (
                  <EyeIcon size={16} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500 pl-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? "Confirming..." : "Confirm password"}
          </button>
        </form>
      </div>
    </div>
  );
}
