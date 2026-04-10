"use client";

import { useRouter } from "next/dist/client/components/navigation";
import { useForm } from "react-hook-form";

type ForgotPasswordFormValues = {
  email: string;
};

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>();
  const router = useRouter();
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    console.log(data);
    router.push("/otp-verification");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute -bottom-20 -right-30 rotate-45 blur-[50px]" />
      <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-10 w-full max-w-sm border border-[#ECEFF3] shadow-sm">
        <h1 className="text-[#1A2A56] text-xl md:text-2xl font-semibold text-center leading-[116%] tracking-[0.12px] mb-8">
          Forget Password
        </h1>

        <p className="text-[#777980] text-base text-center leading-[132%] tracking-[0.08px] mb-8">
          Password must be at least 8 characters with letters, numbers, and
          symbols
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
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

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? "Sending..." : "Get an OTP code"}
          </button>
        </form>
      </div>
    </div>
  );
}
