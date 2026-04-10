"use client";

import { useRef, useState } from "react";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 5);
    const newOtp = Array(5).fill("");
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    const nextEmpty = pasted.length < 5 ? pasted.length : 4;
    inputRefs.current[nextEmpty]?.focus();
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length < 5) return;
    // Handle OTP verification logic here
    console.log("OTP submitted:", code);
  };

  const isComplete = otp.every((d) => d !== "");

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute -bottom-20 -right-30 rotate-45 blur-[50px]" />
      <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-10 w-full max-w-sm border border-[#ECEFF3] shadow-sm">
        <h1 className="text-[#1A2A56] text-xl md:text-2xl font-semibold text-center leading-[116%] tracking-[0.12px] mb-4">
          Verify OTP
        </h1>

        <p className="text-[#8792A8] text-sm text-center leading-[100%] tracking-[0.07px] mb-6">
          Please input the verification code
        </p>

        {/* OTP inputs */}
        <div className="flex items-center justify-center gap-1 md:gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-10 h-10 md:w-12 md:h-12 text-center text-lg font-semibold text-[#1A2A56] rounded-xl border bg-white focus:outline-none focus:ring-0 transition ${
                digit ? "border-[#385BBA]" : "border-[#8792A8]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="submit-btn shrink-0"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
