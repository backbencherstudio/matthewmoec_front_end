// components/Admin/Campaign/CampaignFilterBar.tsx
"use client";

import {
  CampaignFilterParams,
  useGetCampaignsQuery,
  useGetSourcesQuery,
} from "@/redux/features/campaign/campaignApi";
import { Download, Filter, X } from "lucide-react";

interface CampaignFilterBarProps {
  filters: CampaignFilterParams;
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
  onExport?: () => void;
  isLoading?: boolean;
}

export default function CampaignFilterBar({
  filters,
  onFilterChange,
  onReset,
  onExport,
  isLoading,

}: CampaignFilterBarProps) {
  
  const { data: campaigns, isLoading: campaignsLoading } =
    useGetCampaignsQuery();
  const { data: sources, isLoading: sourcesLoading } = useGetSourcesQuery();

  const isFilterLoading = campaignsLoading || sourcesLoading || isLoading;

  // Count active filters
  const activeFilterCount = [
    filters.campaign,
    filters.source,
    filters.date_from,
    filters.date_to,
  ].filter(Boolean).length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 ">
          <Filter className="w-5 h-5 text-gray-500" />
          <span className="font-medium text-gray-700">Filters</span>
          {activeFilterCount > 0 && (
            <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
              {activeFilterCount}
            </span>
          )}

          {/* Reset Button */}

          {activeFilterCount > 0 && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-4 h-4" />
              Reset all
            </button>
          )}
        </div>
        <div>
          <button
            onClick={onExport}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition cursor-pointer"
          >
            <Download className="w-4 h-4 mr-1 inline" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Campaign
          </label>
          <select
            value={filters.campaign ?? ""}
            onChange={(e) => onFilterChange("campaign", e.target.value)}
            disabled={isFilterLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-400"
          >
            <option value="">All campaigns</option>
            {campaigns?.data.map((campaign: any) => (
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
            value={filters.source ?? ""}
            onChange={(e) => onFilterChange("source", e.target.value)}
            disabled={isFilterLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:text-gray-400"
          >
            <option value="">All sources</option>
            {sources?.data.map((source: any) => (
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
            value={filters.date_from ?? ""}
            onChange={(e) => onFilterChange("date_from", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date To
          </label>
          <input
            type="date"
            value={filters.date_to ?? ""}
            onChange={(e) => onFilterChange("date_to", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>
    </div>
  );
}
