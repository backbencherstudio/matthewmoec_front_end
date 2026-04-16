/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CharityPanelHeader from "@/components/Admin/CharityPanel/CharityPanelHeader";
import DonationHistory from "@/components/Admin/CharityPanel/DonationHistory";
import ManageCharities from "@/components/Admin/CharityPanel/ManageCharities";
import UpdateSuccessModal from "@/components/Admin/CharityPanel/UpdateSuccessModal";
import { useAddCharityMutation } from "@/redux/features/admin/charity/charityApi";
import { useState } from "react";
import { toast } from "sonner";

export default function CharityPanel() {
  const [open, setOpen] = useState(false);

  const [charityName, setCharityName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [shareMessage, setShareMessage] = useState(
    "Last month CartForGood donated $800 to Feeding America and $440 to Springfield Food Pantry.",
  );
  const [totalLastMonth, setTotalLastMonth] = useState("1,998.00");

  const [addCharity, { isLoading }] = useAddCharityMutation();

  const handleAddCharity = async () => {
    if (!charityName.trim() || !donationAmount.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    const payload = {
      charity_organization_name: charityName.trim(),
      donation_amount: parseFloat(donationAmount),
      date: donationDate || new Date().toISOString().split("T")[0],
    };

    try {
      const response = await addCharity(payload).unwrap();
      if (response?.success) {
        toast.success(
          response?.message || "Charity donation added successfully!",
        );
        setCharityName("");
        setDonationAmount("");
        setDonationDate("");
      }
    } catch (error: any) {
      const errorMsg = error?.data?.message || "Failed to add charity";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] p-4 sm:p-6 lg:px-13 lg:py-10 ">
      {/* Page Header */}
      <CharityPanelHeader />
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DonationHistory />

        {/* RIGHT — Manage + Add */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[16px] border border-[#ECEFF3] p-6">
            <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] border-b pb-5 mb-8">
              Manage Charities for{" "}
            </h2>
            <ManageCharities />

            {/* Add Charity */}
            <div className="mt-8">
              <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] border-b pb-5 mb-8">
                Add Charity
              </h2>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
                    Charity Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Feeding America"
                    value={charityName}
                    onChange={(e) => setCharityName(e.target.value)}
                    className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
                  />
                </div>
                <div>
                  <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
                    Donation Amount ($)
                  </label>
                  <input
                    type="number"
                    placeholder="1248.00"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
                  />
                </div>
                <div>
                  <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
                    Date
                  </label>
                  <input
                    type="date"
                    value={donationDate}
                    onChange={(e) => setDonationDate(e.target.value)}
                    className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm placeholder:text-[#B0B8C9] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
                  />
                </div>
                <button
                  onClick={handleAddCharity}
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Adding..." : "Add Charity"}
                </button>
              </div>
            </div>

            {/* Share Message + Total */}
            <div className="mt-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
                    Share Message (App Home)
                  </label>
                  <textarea
                    rows={3}
                    value={shareMessage}
                    onChange={(e) => setShareMessage(e.target.value)}
                    className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm text-[#6B7A99] resize-none focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
                  />
                </div>
                <div>
                  <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
                    Total Last Month Donation Amount($)
                  </label>
                  <input
                    type="text"
                    value={totalLastMonth}
                    onChange={(e) => setTotalLastMonth(e.target.value)}
                    className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm text-[#6B7A99] focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
                  />
                </div>
                <button className="submit-btn" onClick={() => setOpen(true)}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpdateSuccessModal
        open={open}
        onOpenChange={setOpen}
        previewMessage="Last month CartForGood donated $800 to Feeding America and $440 to Springfield Food Pantry."
        onSave={() => console.log("Saved!")}
      />
    </div>
  );
}
