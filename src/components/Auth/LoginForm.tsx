/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useLoginMutation } from "@/redux/features/authApi/authApi";
import Cookies from "js-cookie";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await login(data).unwrap();

      if (response?.success) {
        const accessToken = response?.authorization?.access_token;
        const role = response?.type || "admin";
        localStorage?.setItem("role", role);
        localStorage?.setItem("access_token", accessToken);
        Cookies.set("access_token", accessToken);
        Cookies.set("role", role);
        toast.success(response?.message || "Logged in successfully");
        router.push("/admin/dashboard");
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Login failed";
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-lg leading-[132%] tracking-[0.09px] text-[#A5A5AB] mb-4">
          Email
        </label>
        <input
          type="email"
          placeholder="admin@cartforgood.com"
          className={`w-full p-4 rounded-full border bg-white text-sm focus:outline-none focus:ring-0 ${
            errors.email ? "border-red-400" : "border-[#E9E9EA]"
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 pl-2">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-5">
        <label className="block text-lg leading-[132%] tracking-[0.09px] text-[#A5A5AB] mb-4">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="**********************"
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
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-xs text-red-500 pl-2">
            {errors.password.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={isLoading} className="submit-btn w-full">
        {isLoading ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
