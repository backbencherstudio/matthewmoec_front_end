import baseApi from "@/redux/api/baseApi";

const storeCommissionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStoreCommission: builder.mutation({
      query: (data) => ({
        url: "/admin/store-commission",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Commission"],
    }),

    getStoreCommission: builder.query({
      query: ({
        page,
        limit,
        month,
        year,
      }: {
        page: number;
        limit: number;
        month: number;
        year: number;
      }) => ({
        url: "/admin/store-commission",
        method: "GET",
        params: { page, limit, month, year },
      }),
      providesTags: ["Commission"],
    }),
    updateStoreCommission: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/store-commission/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Commission"],
    }),
    deleteStoreCommission: builder.mutation({
      query: (id) => ({
        url: `/admin/store-commission/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Commission"],
    }),
  }),
});

export const {
  useCreateStoreCommissionMutation,
  useGetStoreCommissionQuery,
  useUpdateStoreCommissionMutation,
  useDeleteStoreCommissionMutation,
} = storeCommissionApi;

export default storeCommissionApi;
