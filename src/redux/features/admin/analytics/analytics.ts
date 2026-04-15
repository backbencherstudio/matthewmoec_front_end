import baseApi from "@/redux/api/baseApi";

const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStatistics: builder.query({
      query: () => ({
        url: "/admin/analytics/dashboard-statistics",
        method: "GET",
      }),
      providesTags: ["Charity"],
    }),
  }),
});

export const { useGetDashboardStatisticsQuery } = analyticsApi;

export default analyticsApi;
