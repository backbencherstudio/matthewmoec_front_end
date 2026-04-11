"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DeleteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  isLoading?: boolean;
}

export default function DeleteModal({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  isLoading = false,
}: DeleteModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-8 w-full md:min-w-md border border-[#ECEFF3] shadow-lg text-center">
        <DialogHeader className="flex flex-col items-center gap-2 mb-2">
          <DialogTitle className="text-[#1A2A56] text-xl lg:text-[24px] leading-[132%] tracking-[0.14px] font-semibold text-center mt-6">
            {title}
          </DialogTitle>

          {description && (
            <DialogDescription className="text-[#8792A8] text-base text-center leading-[140%] tracking-[0.08px] mt-6">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="flex justify-center gap-3 mt-4">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={isLoading}
            className="px-6 py-2.5 rounded-full bg-[#F38B94] hover:bg-[#d9595f] text-white text-sm font-medium transition-colors disabled:opacity-60 cursor-pointer"
          >
            {isLoading ? "Loading..." : confirmLabel}
          </button>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="px-6 py-2.5 rounded-full border border-[#ECEFF3] text-[#1A2A56] text-sm font-medium hover:bg-[#F6F8FA] transition-colors cursor-pointer"
          >
            {cancelLabel}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
