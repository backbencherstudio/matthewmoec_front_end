"use client";
import AddStoreModal from "@/components/Admin/StoreManager/AddStoreModal";
import StoreCard from "@/components/Admin/StoreManager/StoreCard";
import { useState } from "react";

export default function StoreManagerPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-13 py-10 relative overflow-hidden h-screen">
      <div className="h-50 w-75 bg-linear-to-b from-[#A1BAFF] to-[#FFFF] rounded-full absolute bottom-0 -right-30 rotate-45 blur-[50px]" />
      <div className="flex items-center justify-between">
        <h1 className="text-[#1A2A56] leading-[124%] tracking-[0.16px] text-lg md:text-xl lg:text-[32px] font-semibold">
          Store Manager
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-linear-to-b from-[#3658B3] to-[#1F3265] text-white py-4 px-8 text-base leading-[124%] tracking-[0.08px] rounded-full cursor-pointer transition-colors"
        >
          Add New Store
        </button>
      </div>
      <div className="mt-6">
        <StoreCard />
      </div>

      <AddStoreModal
        open={open}
        onOpenChange={setOpen}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
}
