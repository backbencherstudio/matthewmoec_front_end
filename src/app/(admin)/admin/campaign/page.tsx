// app/admin/campaign-dashboard/page.tsx
'use client';

import CampaignHeader from '@/components/Admin/Campaign/CampaignHeader';
import CampaignSummaryCards from '@/components/Admin/Campaign/CampaignSummaryCards';
import CampaignSkeleton from '@/components/Admin/Campaign/CampaignSkeleton';
import { useGetCampaignAnalyticsQuery, useGetTodayStatsQuery } from '@/redux/features/campaign/campaignApi';
import { useState } from 'react';
import CampaignFilterBar from '@/components/Admin/Campaign/CampaignFilterBar';
import CampaignGroups from '@/components/Admin/Campaign/CampaignGroups';
import CampaignClicksTable from '@/components/Admin/Campaign/CampaignClicksTable';
import CampaignPagination from '@/components/Admin/Campaign/CampaignPagination';


export default function CampaignDashboardPage() {
  // State for filters
  const [filters, setFilters] = useState({
    campaign: '',
    source: '',
    date_from: '',
    date_to: '',
    page: 1,
    limit: 10,
  });

  // RTK Query hooks
  const {
    data: analyticsData,
    isLoading: isLoadingAnalytics,
    isFetching: isFetchingAnalytics,
    refetch: refetchAnalytics,
  } = useGetCampaignAnalyticsQuery(filters);

  console.log('Analytics Data:', analyticsData);

  const {
    data: todayStats,
    isLoading: isLoadingToday,
    refetch: refetchToday,
  } = useGetTodayStatsQuery();

  // Combined loading state
  const isLoading = isLoadingAnalytics || isLoadingToday;

  // Handlers
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const handleResetFilters = () => {
    setFilters({
      campaign: '',
      source: '',
      date_from: '',
      date_to: '',
      page: 1,
      limit: 10,
    });
  };

  const handleRefresh = async () => {
    await Promise.all([refetchAnalytics(), refetchToday()]);
  };

  // Show skeleton on initial load
  if (isLoadingAnalytics && !analyticsData) {
    return <CampaignSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <CampaignHeader

          onRefresh={handleRefresh}
          isRefreshing={isFetchingAnalytics}
        />

        {/* Summary Cards */}
        {analyticsData && (
          <CampaignSummaryCards
            summary={analyticsData.data.summary}
            todayStats={todayStats || null}
          />
        )}

        {/* Filters */}
        <CampaignFilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        {/* Campaign Groups */}
        {analyticsData && analyticsData?.data?.campaign_groups.length > 0 && (
          <CampaignGroups groups={analyticsData?.data?.campaign_groups} />
        )}

        {/* Clicks Table */}
        {analyticsData && (
          <>
            <CampaignClicksTable data={analyticsData.data?.items} />
            <CampaignPagination
              pagination={analyticsData.data?.pagination}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}