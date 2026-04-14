/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useResetPasswordMutation } from "@/redux/features/authApi/authApi";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type EnterPasswordFormValues = {
  password: string;
  confirmPassword: string;
};
export default function SetNewPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterPasswordFormValues>();
  const router = useRouter();
  const onSubmit = async (data: EnterPasswordFormValues) => {
    // Handle password update logic here
    console.log(data);
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    const email = localStorage?.getItem("email");
    const otp = localStorage?.getItem("otp");
    const payload = {
      email,
      otp,
      new_password: password,
    };

    try {
      const response = await resetPassword(payload).unwrap();
      if (response?.success) {
        toast.success(response.message || "Password reset successfully");
        localStorage.removeItem("otp");
        localStorage.removeItem("email");
        router.push("/congratulation");
      }
    } catch (error) {
      const errorMessage =
        (error as any)?.data?.message || "Password reset failed";
      toast.error(errorMessage);
    }
  };
  return (
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
            {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
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
      <button type="submit" disabled={isLoading} className="submit-btn">
        {isLoading ? "Confirming..." : "Confirm password"}
      </button>
    </form>
  );
}
