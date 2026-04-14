import baseApi from "@/redux/api/baseApi";

const receiptsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReceipt: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/receipt",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Receipts"],
    }),

    getAllReceipts: builder.query({
      query: () => ({
        url: "/admin/receipt",
        method: "GET",
      }),
      providesTags: ["Receipts"],
    }),
  }),
});

export const { useCreateReceiptMutation, useGetAllReceiptsQuery } = receiptsApi;

export default receiptsApi;
