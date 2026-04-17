import baseApi from "@/redux/api/baseApi";

const receiptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReceipts: builder.query({
      query: ({ page = 1, limit = 8 }) => ({
        url: "/receipt",
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["Receipts"],
    }),

    getMonthlyStatistics: builder.query({
      query: () => ({
        url: "/receipt/monthly-statistic",
        method: "GET",
      }),
      providesTags: ["Receipts"],
    }),

    getMonthlyReceipts: builder.query({
      query: ({ page = 1, limit = 2 }) => ({
        url: "/receipt/monthly-receipts",
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["Receipts"],
    }),
  }),
});

export const {
  useGetAllReceiptsQuery,
  useGetMonthlyStatisticsQuery,
  useGetMonthlyReceiptsQuery,
} = receiptApi;

export default receiptApi;
