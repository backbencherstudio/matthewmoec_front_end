// app/admin/campaign-dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";

import CampaignHeader from "@/components/Admin/Campaign/CampaignHeader";
import CampaignSummaryCards from "@/components/Admin/Campaign/CampaignSummaryCards";
import CampaignFilterBar from "@/components/Admin/Campaign/CampaignFilterBar";
import CampaignClicksTable from "@/components/Admin/Campaign/CampaignClicksTable";
import CampaignPagination from "@/components/Admin/Campaign/CampaignPagination";
import CampaignSkeleton from "@/components/Admin/Campaign/CampaignSkeleton";
import CampaignNoData from "@/components/Admin/Campaign/CampaignNoData";
import {
  useGetCampaignAnalyticsQuery,
  useGetCampaignSummaryQuery,
  CampaignFilterParams,
  useLazyExportCampaignCSVQuery,
} from "@/redux/features/campaign/campaignApi";
import { toast } from "sonner";

export default function CampaignDashboardPage() {
  // State for filters
  const [filters, setFilters] = useState<CampaignFilterParams>({
    campaign: "",
    source: "",
    date_from: "",
    date_to: "",
    page: 1,
    limit: 10,
  });

  // Get current month range for summary
  const getMonthRange = () => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59,
      999,
    );
    return {
      from: firstDay.toISOString(),
      to: lastDay.toISOString(),
    };
  };

  const monthRange = getMonthRange();

  // RTK Query hooks
  const {
    data: analyticsData,
    isLoading: isLoadingAnalytics,
    isFetching: isFetchingAnalytics,
    refetch: refetchAnalytics,
  } = useGetCampaignAnalyticsQuery(filters);

  const {
    data: summaryData,
    isLoading: isLoadingSummary,
    refetch: refetchSummary,
  } = useGetCampaignSummaryQuery(monthRange);

  const [triggerExport, { isFetching: isExporting }] =
    useLazyExportCampaignCSVQuery();

  // Combined loading state
  const isLoading = isLoadingAnalytics || isLoadingSummary;

  // Handlers
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const handleResetFilters = () => {
    setFilters({
      campaign: "",
      source: "",
      date_from: "",
      date_to: "",
      page: 1,
      limit: 10,
    });
  };

  const handleRefresh = async () => {
    await Promise.all([refetchAnalytics(), refetchSummary()]);
  };

  // ✅ NEW: Export handler
  const handleExport = async () => {
    try {
      const blob = await triggerExport(filters).unwrap();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Generate filename with date range
      const dateStr = new Date().toISOString().split('T')[0];
      const campaignName = filters.campaign || 'all-campaigns';
      const sourceName = filters.source || 'all-sources';
      link.download = `campaign-analytics_${campaignName}_${sourceName}_${dateStr}.csv`;
      
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('CSV exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error('Failed to export CSV. Please try again.');
    }
  };

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refetchAnalytics();
      refetchSummary();
    }, 60000);
    return () => clearInterval(interval);
  }, [refetchAnalytics, refetchSummary]);

  // Show skeleton on initial load
  if (isLoadingAnalytics && !analyticsData) {
    return <CampaignSkeleton />;
  }

  // Extract data from response
  const responseData = analyticsData?.data;
  const items = responseData?.items || [];
  const pagination = responseData?.pagination;
  console.log("Analytics Data:", responseData);
  const summary = responseData?.summary;

  // Check if there's any data
  const hasData = items.length > 0 || (summary?.total_clicks ?? 0) > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <CampaignHeader
          onRefresh={handleRefresh}
          isRefreshing={isFetchingAnalytics}
        />

        {/* Summary Cards */}
        <CampaignSummaryCards
          data={summaryData?.data}
          isLoading={isLoadingSummary}
        />

        {/* Filters */}
        <CampaignFilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
          onExport={handleExport}
          isLoading={isLoading}
        />

        {/* Data Table or No Data State */}
        {hasData ? (
          <>
            <CampaignClicksTable data={items} isLoading={isLoadingAnalytics} />
            <CampaignPagination
              pagination={pagination}
              onPageChange={handlePageChange}
              // isLoading={isLoadingAnalytics}
            />
          </>
        ) : (
          <CampaignNoData />
        )}
      </div>
    </div>
  );
}
