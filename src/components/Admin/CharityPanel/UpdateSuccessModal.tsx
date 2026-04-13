"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UpdateSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  previewMessage?: string;
  onSave: () => void;
}

export default function UpdateSuccessModal({
  open,
  onOpenChange,
  previewMessage = "Last month CartForGood donated $800 to Feeding America and $440 to Springfield Food Pantry.",
  onSave,
}: UpdateSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-8 w-full max-w-sm border border-[#ECEFF3] shadow-lg text-center">
        <DialogHeader className="flex flex-col items-center mb-4">
          <DialogTitle className="text-[#1A2A56] text-xl sm:text-[22px] font-bold leading-[132%] tracking-[0.14px] text-center">
            Updated Successfully
          </DialogTitle>
        </DialogHeader>

        {/* Preview Box */}
        <div className="bg-[#F6F8FA] rounded-[14px] px-5 py-4 text-center mb-6">
          <p className="text-[#8A94A6] text-xs font-medium mb-2">
            Published Message Preview:
          </p>
          <p className="text-[#1A2A56] text-sm leading-relaxed">
            {previewMessage}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              onSave();
              onOpenChange(false);
            }}
            className="px-8 py-2.5 rounded-full bg-[#1F3266] text-white text-sm font-medium hover:bg-[#162550] transition-colors cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="px-8 py-2.5 rounded-full border border-[#ECEFF3] text-[#1A2A56] text-sm font-medium hover:bg-[#F6F8FA] transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
