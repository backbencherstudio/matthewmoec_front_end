import baseApi from "@/redux/api/baseApi";

const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStatistics: builder.query({
      query: () => ({
        url: "/admin/analytics/dashboard-statistics",
        method: "GET",
      }),
      providesTags: ["Analytics"],
    }),

    getAnalysisStatistics: builder.query({
      query: () => ({
        url: "/admin/analytics/store-click-statistics",
        method: "GET",
      }),
      providesTags: ["Analytics"],
    }),

    getStoreClickBreakdown: builder.query({
      query: () => ({
        url: "/admin/analytics/store-click-breakdown",
        method: "GET",
      }),
      providesTags: ["Analytics"],
    }),
  }),
});

export const {
  useGetDashboardStatisticsQuery,
  useGetAnalysisStatisticsQuery,
  useGetStoreClickBreakdownQuery,
} = analyticsApi;

export default analyticsApi;
