import LoginForm from "@/components/Auth/LoginForm";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 h-screen ">
      {/* Left panel */}
      <div className="md:col-span-1 bg-linear-to-b from-[#385BBA] to-[#1F3266] px-8 py-10 md:px-20 md:pt-45 ">
        <h1 className="text-white font-semibold text-2xl flex items-center gap-2">
          <CartIcon className="text-white" />
          <span>CartForGood</span>
        </h1>
        <div className="hidden md:block mt-6">
          <h2 className="text-[#E9E9EA] text-xl font-medium">Admin Panel</h2>
          <p className="mt-4 text-[#D2D2D5] text-sm leading-relaxed">
            Efficiently manage stores, charity data, and analytics within a
            single, integrated platform.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 md:col-span-3 bg-[#FFFFFF] flex items-center justify-center px-4 py-10 md:p-10 relative overflow-hidden">
        <div className="h-50 w-75 bg-linear-to-b from-[#FFFF] to-[#A1BAFF] rounded-full absolute -top-20 -right-20 rotate-45 blur-[50px]" />
        <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute -bottom-20 -right-30 rotate-45 blur-[50px]" />
        <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 w-full max-w-sm shadow-sm border border-[#ECEFF3]">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <CartIcon className="text-[#1A2A56]" />
            <span className="text-[#1A2A56] font-semibold text-lg md:text-[28px] leading-[124%] tracking-[0.14px]">
              CartForGood
            </span>
          </div>

          <h1 className="text-[#395CBC] text-2xl font-semibold leading-[116%] tracking-[0.12px] mb-5">
            Login
          </h1>

          {/* Google button */}
          {/* <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full border bg-white border-[#ECEFF3] text-sm font-medium hover:bg-gray-50 transition mb-4 cursor-pointer"
          >
            <GoogleIcon />
            <span className="text-[#1A2A56] text-base font-medium">
              Continue with Google
            </span>
          </button> */}

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <LoginForm />

          {/* Forgot password */}
          <div className="mt-4">
            <Link
              href="/forget-password"
              className="text-[#395CBC] text-sm underline underline-offset-4 leading-[100%] tracking-[0.07px]"
            >
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
