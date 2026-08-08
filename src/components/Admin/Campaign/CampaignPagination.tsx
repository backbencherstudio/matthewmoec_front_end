// components/campaign-dashboard/CampaignPagination.tsx
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CampaignPaginationProps {
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
  };
  onPageChange: (page: number) => void;
}

export default function CampaignPagination({ pagination, onPageChange }: CampaignPaginationProps) {
  if (pagination.total_pages <= 1) return null;

  const start = (pagination.page - 1) * pagination.limit + 1;
  const end = Math.min(pagination.page * pagination.limit, pagination.total);

  return (
    <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600">
        Showing <span className="font-medium">{start}</span> to{' '}
        <span className="font-medium">{end}</span> of{' '}
        <span className="font-medium">{pagination.total}</span> results
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(pagination.page - 1)}
          disabled={!pagination.has_prev_page}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <span className="px-3 py-1 text-sm font-medium text-gray-700">
          Page {pagination.page} of {pagination.total_pages}
        </span>
        <button
          onClick={() => onPageChange(pagination.page + 1)}
          disabled={!pagination.has_next_page}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center gap-1"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}