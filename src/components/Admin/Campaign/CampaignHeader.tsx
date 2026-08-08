// components/campaign-dashboard/CampaignHeader.tsx
'use client';

import { RefreshCw } from 'lucide-react';

interface CampaignHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

export default function CampaignHeader({ onRefresh, isRefreshing }: CampaignHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
      <div>
         <h1 className="text-[#1A2A56] leading-[124%] tracking-[0.16px] text-lg md:text-xl lg:text-[32px] font-semibold">
          Campaign Analytics
        </h1>
        <p className="text-gray-600 mt-1 text-sm">
          Track performance of your Meta Ads campaigns
        </p>
      </div>
      <button
        onClick={onRefresh}
        disabled={isRefreshing}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        {isRefreshing ? 'Refreshing...' : 'Refresh'}
      </button>
    </div>
  );
}