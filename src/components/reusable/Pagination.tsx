import { ChevronRight } from "lucide-react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-5">
      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition cursor-pointer ${
            currentPage === page
              ? "bg-[#1A2A56] text-white"
              : "border border-[#1A2A56] text-[#687588] hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-lg border border-[#1A2A56] text-[#687588] flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
