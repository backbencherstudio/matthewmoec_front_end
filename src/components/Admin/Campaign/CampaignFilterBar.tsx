// components/campaign-dashboard/CampaignFilterBar.tsx
'use client';

import { useState } from 'react';
import { Filter, Loader2 } from 'lucide-react';
import { useGetSourcesQuery, useGetCampaignsQuery } from '@/redux/features/campaign/campaignApi';

interface CampaignFilterBarProps {
  filters: {
    campaign: string;
    source: string;
    date_from: string;
    date_to: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
}

export default function CampaignFilterBar({
  filters,
  onFilterChange,
  onReset,
}: CampaignFilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  
  // Fetch sources and campaigns separately
  const { 
    data: sources, 
    isLoading: isLoadingSources, 
    isError: isSourcesError 
  } = useGetSourcesQuery();
  
  const { 
    data: campaigns, 
    isLoading: isLoadingCampaigns, 
    isError: isCampaignsError 
  } = useGetCampaignsQuery();

  const isLoading = isLoadingSources || isLoadingCampaigns;
  const isError = isSourcesError || isCampaignsError;

  console.log('Sources:', sources);
  console.log('Campaigns:', campaigns);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-center py-4">
          <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-600">Loading filters...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="text-red-500 text-center py-4">
          Failed to load filter options
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <button
          // onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filters</span>
          <span className="text-sm text-gray-500">
            {/* {showFilters ? '' : '▶'} */}
            ▼
          </span>
        </button>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Reset filters
        </button>
      </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Campaign
            </label>
            <select
              value={filters.campaign}
              onChange={(e) => onFilterChange('campaign', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All campaigns</option>
              {campaigns?.data?.map((campaign:string) => (
                <option key={campaign} value={campaign}>
                  {campaign}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Source
            </label>
            <select
              value={filters.source}
              onChange={(e) => onFilterChange('source', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All sources</option>
              {sources?.data?.map((source:string) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date From
            </label>
            <input
              type="date"
              value={filters.date_from}
              onChange={(e) => onFilterChange('date_from', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date To
            </label>
            <input
              type="date"
              value={filters.date_to}
              onChange={(e) => onFilterChange('date_to', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      {/* )} */}
    </div>
  );
}