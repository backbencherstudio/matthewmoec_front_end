"use client";
import CommissionEntryForm from "@/components/Admin/StoreCommission/CommissionEntryForm";
import StoreCommissionHeader from "@/components/Admin/StoreCommission/StoreCommissionHeader";
import StoreCommissionTable from "@/components/Admin/StoreCommission/StoreCommissionTable";

export default function StoreCommissionPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-13 lg:py-10 relative overflow-hidden">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />
      <h1 className="text-lg md:text-xl lg:text-[32px] text-[#1A2A56] leading-[132%] tracking-[0.16px] font-semibold">
        Store Commission
      </h1>
      <div className="mt-6">
        <CommissionEntryForm
          onSubmit={(data) => console.log(data)}
          onCancel={() => console.log("cancelled")}
        />
      </div>
      <div className="mt-11 mb-8">
        <StoreCommissionHeader />
      </div>
      <StoreCommissionTable />
    </div>
  );
}
