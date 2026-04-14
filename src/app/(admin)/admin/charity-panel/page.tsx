"use client";

import CharityPanelHeader from "@/components/Admin/CharityPanel/CharityPanelHeader";
import UpdateSuccessModal from "@/components/Admin/CharityPanel/UpdateSuccessModal";
import EditIcon from "@/components/icons/EditIcon";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type Charity = {
  id: number;
  name: string;
  amount: number;
};

type MonthRecord = {
  id: number;
  month: string;
  total: number;
  charities: { name: string; amount: number }[];
};

const donationHistory: MonthRecord[] = [
  {
    id: 1,
    month: "January 2025",
    total: 1998,
    charities: [
      { name: "Feeding America", amount: 1248 },
      { name: "Local Shelter", amount: 750 },
    ],
  },
  {
    id: 2,
    month: "Feb 2026",
    total: 980,
    charities: [{ name: "St. Jude", amount: 980 }],
  },
  {
    id: 3,
    month: "Jan 2026",
    total: 1104,
    charities: [{ name: "Feeding America", amount: 1104 }],
  },
  {
    id: 4,
    month: "Dec 2025",
    total: 2011,
    charities: [{ name: "Salvation Army", amount: 2011 }],
  },
  {
    id: 5,
    month: "Nov 2025",
    total: 876,
    charities: [{ name: "Feeding America", amount: 876 }],
  },
];

export default function CharityPanel() {
  const [open, setOpen] = useState(false);
  const [charities, setCharities] = useState<Charity[]>([
    { id: 1, name: "Feeding America", amount: 1248 },
    { id: 2, name: "Local Shelter", amount: 750 },
  ]);
  const [charityName, setCharityName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [shareMessage, setShareMessage] = useState(
    "Last month CartForGood donated $800 to Feeding America and $440 to Springfield Food Pantry.",
  );
  const [totalLastMonth, setTotalLastMonth] = useState("1,998.00");

  const handleAddCharity = () => {
    if (!charityName.trim() || !donationAmount.trim()) return;
    setCharities((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: charityName.trim(),
        amount: parseFloat(donationAmount),
      },
    ]);
    setCharityName("");
    setDonationAmount("");
  };

  const handleDelete = (id: number) => {
    setCharities((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] p-4 sm:p-6 lg:px-13 lg:py-10 ">
      {/* Page Header */}
      <CharityPanelHeader />
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-[16px] border border-[#ECEFF3] p-6">
          <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] border-b pb-5 mb-8">
            Donation History
          </h2>
          <div className="flex flex-col divide-y divide-[#ECEFF3]">
            {donationHistory.map((record) => (
              <div key={record.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[#1A2A56] font-bold text-lg leading-[132%] tracking-[0.09px]">
                    {record.month}
                  </span>
                  <span className="text-[#1A2A56] font-bold text-lg leading-[132%] tracking-[0.09px]">
                    ${record.total.toLocaleString()}
                  </span>
                </div>
                {record.charities.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between pl-3"
                  >
                    <span className="text-[#8792A8] text-base before:content-['•'] before:mr-1.5 leading-[132%] tracking-[0.08px]">
                      {c.name}
                    </span>
                    <span className="text-[#8792A8] text-base mt-4 leading-[132%] tracking-[0.08px]">
                      ${c.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Manage + Add */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[16px] border border-[#ECEFF3] p-6">
            <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] border-b pb-5 mb-8">
              Manage Charities for{" "}
            </h2>
            <div className="flex flex-col gap-2">
              {charities.map((charity) => (
                <div
                  key={charity.id}
                  className="flex items-center justify-between bg-[#F6F8FA] rounded-[12px] p-4 border border-[#ECEFF3]"
                >
                  <span className="text-[#1A2A56] text-base font-medium">
                    {charity.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#395CBC] text-base font-semibold">
                      ${charity.amount.toLocaleString()}
                    </span>
                    <button className="text-[#385BBA] hover:text-[#1F3266] transition-colors cursor-pointer">
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => handleDelete(charity.id)}
                      className="text-[#F04438] hover:text-red-700 transition-colors cursor-pointer"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
              {charities.length === 0 && (
                <p className="text-[#B0B8C9] text-sm text-center py-4">
                  No charities added yet.
                </p>
              )}
            </div>

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
                <button onClick={handleAddCharity} className="submit-btn">
                  Add Charity
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
