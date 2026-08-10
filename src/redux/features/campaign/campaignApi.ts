// redux/api/campaignApi.ts
import baseApi from "@/redux/api/baseApi";

// ============ Types ============

export interface CampaignClick {
  id: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  session_id: string;
  ip_address: string | null;
  user_agent: string | null;
  referrer: string | null;
  landing_page: string;
  device_type: string;
  browser: string;
  os: string;
  click_count: number;
  created_at: string;
  updated_at: string;
}

export interface CampaignAnalyticsResponse {
  success: boolean;
  data: {
    items: CampaignClick[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      total_pages: number;
      has_next_page: boolean;
      has_prev_page: boolean;
    };
    summary: {
      total_clicks: number;
      total_click_count: number;
      unique_campaigns: number;
    };
    campaign_groups: Array<{
      _count: number;
      _sum: {
        click_count: number;
      };
      utm_campaign: string;
      utm_source: string;
      utm_medium: string;
    }>;
  };
}

export interface CampaignFilterParams {
  campaign?: string;
  source?: string;
  date_from?: string;
  date_to?: string;
  page?: number;
  limit?: number;
}

export interface TodayStats {
  total_clicks: number;
  unique_campaigns: number;
}

export interface FilterOptions {
  campaigns: string[];
  sources: string[];
}

// redux/api/campaignApi.ts

export interface TrackCampaignData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term?: string;
  utm_content?: string;      // ✅ Keep for ad/creative tracking
  store_id: string;           // ✅ NEW: Store identifier
  session_id: string;
  landing_page: string;
  referrer?: string;
  device_type: string;
  browser: string;
  os: string;
  // ❌ REMOVED: tracked_at (backend will auto-add)
}
// ============ API ============

const campaignApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get campaign analytics with filters
    getCampaignAnalytics: builder.query<
      CampaignAnalyticsResponse,
      CampaignFilterParams
    >({
      query: (params) => {
        // Create a clean object by filtering out empty values
        const cleanParams: Record<string, any> = {};
        if (params?.campaign) cleanParams.campaign = params.campaign;
        if (params?.source) cleanParams.source = params.source;
        if (params?.date_from) cleanParams.date_from = params.date_from;
        if (params?.date_to) cleanParams.date_to = params.date_to;
        if (params?.page && params.page > 1) cleanParams.page = params.page;
        if (params?.limit && params.limit !== 10)
          cleanParams.limit = params.limit;

        return {
          // The base URL is always the same
          url: "/admin/campaign/analytics",
          method: "GET",
          // Axios/RTK Query will automatically append the cleanParams as a query string
          // If cleanParams is empty, no query string will be added.
          params: cleanParams,
        };
      },
      providesTags: ["Campaign"],
    }),

    // Get today's stats
    getTodayStats: builder.query<TodayStats, void>({
      query: () => ({
        url: "/admin/campaign/today",
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    // Get sources list
    getSources: builder.query<any, void>({
      query: () => ({
        url: "/admin/campaign/sources",
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    // Get campaigns list
    getCampaigns: builder.query<any, void>({
      query: () => ({
        url: "/admin/campaign/campaigns",
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    // Track campaign visit
    trackCampaignVisit: builder.mutation<void, TrackCampaignData>({
      query: (data) => ({
        url: "/campaign/track",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Campaign"],
    }),
  }),
});

// ============ Exports ============

export const {
  useGetCampaignAnalyticsQuery,
  useGetTodayStatsQuery,
  useGetSourcesQuery, // ✅ New export
  useGetCampaignsQuery, // ✅ New export
  useTrackCampaignVisitMutation,
} = campaignApi;

export default campaignApi;
