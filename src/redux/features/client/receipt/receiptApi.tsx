import baseApi from "@/redux/api/baseApi";

const receiptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReceipts: builder.query({
      query: () => ({
        url: "/receipt",
        method: "GET",
      }),
      providesTags: ["Receipts"],
    }),
  }),
});

export const { useGetAllReceiptsQuery } = receiptApi;

export default receiptApi;
