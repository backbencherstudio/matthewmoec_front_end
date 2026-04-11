"use client";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email */}
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

      {/* Password */}
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

      {/* Submit */}
      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
