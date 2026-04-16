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
  }),
});

export const { useCreateStoreCommissionMutation } = storeCommissionApi;

export default storeCommissionApi;
