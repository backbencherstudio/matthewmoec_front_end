// components/Admin/Campaign/CampaignHeader.tsx
'use client';

import { RefreshCw } from 'lucide-react';

interface CampaignHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

export default function CampaignHeader({ onRefresh, isRefreshing }: CampaignHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Campaign & Store Click Analytics
          </h1>
          <p className="text-gray-600 mt-1 text-sm">
            Track clicks from campaigns to participating stores
          </p>
        </div>
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
    </div>
  );
}