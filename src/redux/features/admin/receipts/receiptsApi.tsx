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

    getSingleReceipt: builder.query({
      query: (id: string) => ({
        url: `/admin/receipt/${id}`,
        method: "GET",
      }),
      providesTags: ["Receipts"],
    }),

    updateReceipt: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/receipt/${data.id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Receipts"],
    }),

    deleteReceipt: builder.mutation({
      query: (id) => {
        return {
          url: `/admin/receipt/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Receipts"],
    }),
  }),
});

export const {
  useCreateReceiptMutation,
  useGetAllReceiptsQuery,
  useGetSingleReceiptQuery,
  useUpdateReceiptMutation,
  useDeleteReceiptMutation,
} = receiptsApi;

export default receiptsApi;
