"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SaveSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  question?: string;
  description?: string;
  onSave: () => void;
}

export default function SaveSuccessModal({
  open,
  onOpenChange,
  title = "Changes Saved Successfully!",
  question = "Do you want to save changes?",
  description = "All application configurations have been successfully updated and are now fully applied across the system.",
  onSave,
}: SaveSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-8 w-full min-w-md border border-[#ECEFF3] shadow-lg">
        <DialogHeader className="flex flex-col items-center text-center gap-2 mb-2">
          <DialogTitle className="text-[#1A2A56] text-xl sm:text-[22px] font-bold leading-[132%] tracking-[0.14px] text-center">
            {title}
          </DialogTitle>
          <p className="text-[#1A2A56] text-sm font-semibold">{question}</p>
          <p className="text-[#6B7A99] text-sm leading-relaxed text-center">
            {description}
          </p>
        </DialogHeader>

        <div className="flex justify-center gap-3 mt-4">
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
