// components/Admin/Campaign/CampaignSummaryCards.tsx
'use client';

import { MousePointerClick, Store, Trophy } from 'lucide-react';

interface CampaignSummaryCardsProps {
  data?: {
    total_clicks: {
      count: number;
      click_events: number;
    };
    top_store?: {
      name: string;
      clicks: number;
    };
    summary: {
      total_store_clicks: number;
      store_click_percentage: number;
    };
  };
  isLoading?: boolean;
}

export default function CampaignSummaryCards({ data, isLoading }: CampaignSummaryCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 animate-pulse">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-32 mt-2"></div>
          </div>
        ))}
      </div>
    );
  }

  const totalClicks = data?.total_clicks?.count ?? 0;
  const storeClicks = data?.summary?.total_store_clicks ?? 0;
  const storePercentage = data?.summary?.store_click_percentage ?? 0;
  const topStoreName = data?.top_store?.name ?? 'N/A';
  const topStoreClicks = data?.top_store?.clicks ?? 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Ad Clicks */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Ad Clicks</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {totalClicks}
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <MousePointerClick className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">All campaigns</p>
      </div>

      {/* Store Clicks from Ads */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Store Clicks from Ads</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {storeClicks}
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <Store className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {storePercentage.toFixed(1)}% of ad clicks
        </p>
      </div>

      {/* Top Store from Meta */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Top Store from Meta</p>
            <p className="text-2xl font-bold text-gray-900 mt-1 truncate">
              {topStoreName}
            </p>
          </div>
          <div className="bg-amber-50 p-3 rounded-lg">
            <Trophy className="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          By clicks ({topStoreClicks} clicks)
        </p>
      </div>
    </div>
  );
}