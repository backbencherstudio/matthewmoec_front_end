import SetNewPasswordForm from "@/app/components/Auth/SetNewPasswordForm";

export default function SetNewPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute -bottom-20 -right-30 rotate-45 blur-[50px]" />
      <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-10 w-full max-w-sm border border-[#ECEFF3] shadow-sm">
        <h1 className="text-[#1A2A56] text-xl md:text-2xl font-semibold text-center leading-[116%] tracking-[0.12px] mb-6">
          Enter Password
        </h1>

        <SetNewPasswordForm />
      </div>
    </div>
  );
}
