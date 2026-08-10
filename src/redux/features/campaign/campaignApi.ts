// redux/api/campaignApi.ts
import baseApi from "@/redux/api/baseApi";

// ============ Types ============

export interface CampaignClick {
  id: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string | null;
  store_id: string | null;
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
  store: {
    id: string;
    name: string;
    slug: string;
    logo: string;
    link: string;
    sub_text_note: string;
    status: string;
  } | null;
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
      store_clicks: number;
      store_click_percentage: number;
      top_store: string;
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
      store_id: string | null;
      store_name: string;
      store_slug: string | null;
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

// ============ NEW: Summary API Types ============

export interface CampaignSummaryResponse {
  success: boolean;
  data: {
    period: {
      from: string;
      to: string;
    };
    total_clicks: {
      count: number;
      click_events: number;
      previous_period: number;
      percentage_change: number;
      trend: 'up' | 'down' | 'stable';
    };
    top_store: {
      id: string;
      name: string;
      slug: string;
      logo: string;
      clicks: number;
      percentage: number;
    };
    summary: {
      total_store_clicks: number;
      store_click_percentage: number;
      unique_campaigns: number;
      unique_sources: number;
    };
  };
}

export interface SummaryParams {
  from?: string;
  to?: string;
}

// ============ Track Campaign Data ============

export interface TrackCampaignData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term?: string;
  utm_content?: string;      // Store/Ad creative name
  store_id: string;           // Store identifier
  session_id: string;
  landing_page: string;
  referrer?: string;
  device_type: string;
  browser: string;
  os: string;
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
          url: "/campaign/analytics",
          method: "GET",
          params: cleanParams,
        };
      },
      providesTags: ["Campaign"],
    }),

    // ✅ NEW: Get campaign summary for dashboard cards
    getCampaignSummary: builder.query<
      CampaignSummaryResponse,
      SummaryParams
    >({
      query: (params) => {
        const cleanParams: Record<string, any> = {};
        if (params?.from) cleanParams.from = params.from;
        if (params?.to) cleanParams.to = params.to;
        return {
          url: "/campaign/analytics/summary",
          method: "GET",
          params: cleanParams,
        };
      },
      providesTags: ["Campaign"],
    }),

    // Get today's stats
    getTodayStats: builder.query<TodayStats, void>({
      query: () => ({
        url: "/campaign/today",
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    // Get sources list
    getSources: builder.query<any, void>({
      query: () => ({
        url: "/campaign/sources",
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    // Get campaigns list
    getCampaigns: builder.query<any, void>({
      query: () => ({
        url: "/campaign/campaigns",
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    // Track campaign visit (store click)
    trackCampaignVisit: builder.mutation<void, TrackCampaignData>({
      query: (data) => ({
        url: "/campaign/track",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Campaign"],
    }),


    // ✅ NEW: Export campaign data as CSV
    exportCampaignCSV: builder.query<Blob, CampaignFilterParams>({
      query: (params) => {
        // Create a clean object by filtering out empty values
        const cleanParams: Record<string, any> = {};
        if (params?.campaign) cleanParams.campaign = params.campaign;
        if (params?.source) cleanParams.source = params.source;
        if (params?.date_from) cleanParams.date_from = params.date_from;
        if (params?.date_to) cleanParams.date_to = params.date_to;
        if (params?.page && params.page > 1) cleanParams.page = params.page;
        if (params?.limit && params.limit !== 10) cleanParams.limit = params.limit;

        return {
          url: "/campaign/export/csv",
          method: "GET",
          params: cleanParams,
          responseHandler: (response:any) => response.blob(), // ✅ Handle binary response
        };
      },
      providesTags: ["Campaign"],
    }),
  }),
});

// ============ Exports ============

export const {
  useGetCampaignAnalyticsQuery,
  useGetCampaignSummaryQuery,  
  useGetTodayStatsQuery,
  useGetSourcesQuery,
  useGetCampaignsQuery,
  useTrackCampaignVisitMutation,
  useLazyExportCampaignCSVQuery,
} = campaignApi;

export default campaignApi;