"use client";

import { useEffect, useState } from "react";

type CharityDonation = {
  id: string;
  charity_organization_name: string;
  donation_amount: number;
  date: string;
};

interface EditCharityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  charity: CharityDonation | null;
  onSave: (updatedData: {
    charity_organization_name: string;
    donation_amount: number;
    date: string;
  }) => void;
  isLoading?: boolean;
}

export default function EditCharityModal({
  open,
  onOpenChange,
  charity,
  onSave,
  isLoading = false,
}: EditCharityModalProps) {
  const [formData, setFormData] = useState({
    charityName: "",
    donationAmount: "",
    donationDate: "",
  });

  useEffect(() => {
    if (open && charity) {
      const dateObj = new Date(charity.date);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        charityName: charity.charity_organization_name,
        donationAmount: charity.donation_amount.toString(),
        donationDate: dateObj.toISOString().split("T")[0],
      });
    }
  }, [open, charity]);

  const handleSubmit = () => {
    if (
      !formData.charityName.trim() ||
      !formData.donationAmount.trim() ||
      !formData.donationDate
    ) {
      alert("Please fill all fields");
      return;
    }

    onSave({
      charity_organization_name: formData.charityName.trim(),
      donation_amount: parseFloat(formData.donationAmount),
      date: formData.donationDate,
    });

    // Modal will be closed from parent after successful save
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b">
          <h3 className="text-[#1A2A56] text-xl font-semibold">
            Edit Charity Donation
          </h3>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          <div>
            <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
              Charity Organization Name
            </label>
            <input
              type="text"
              value={formData.charityName}
              onChange={(e) =>
                setFormData({ ...formData, charityName: e.target.value })
              }
              className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
            />
          </div>

          <div>
            <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
              Donation Amount ($)
            </label>
            <input
              type="number"
              value={formData.donationAmount}
              onChange={(e) =>
                setFormData({ ...formData, donationAmount: e.target.value })
              }
              className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
            />
          </div>

          <div>
            <label className="text-lg tracking-[0.09px] leading-[132%] font-medium text-[#1A2A56] mb-3 block">
              Date
            </label>
            <input
              type="date"
              value={formData.donationDate}
              onChange={(e) =>
                setFormData({ ...formData, donationDate: e.target.value })
              }
              className="w-full p-3.5 rounded-[8px] border border-[#ECEFF3] bg-[#F6F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3266]/20"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3 p-6 border-t bg-[#F6F8FA]">
          <button
            onClick={() => onOpenChange(false)}
            className="px-8 py-2.5 rounded-full border border-[#ECEFF3] text-[#1A2A56] text-sm font-medium hover:bg-[#F6F8FA] transition-colors cursor-pointer"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-8 py-2.5 rounded-full bg-[#1F3266] text-white text-sm font-medium hover:bg-[#162550] transition-colors cursor-pointer"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
