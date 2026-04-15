import baseApi from "@/redux/api/baseApi";

const charityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonationHistory: builder.query({
      query: () => ({
        url: "/admin/charity/donation-history",
        method: "GET",
      }),
      providesTags: ["Charity"],
    }),

    addCharity: builder.mutation({
      query: (data) => ({
        url: "/admin/charity",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Charity"],
    }),

    getCharity: builder.query({
      query: ({ month, year }: { month: number; year: number }) => ({
        url: "/admin/charity",
        method: "GET",
        params: { month, year },
      }),
      providesTags: ["Charity"],
    }),

    deleteCharity: builder.mutation({
      query: (id) => ({
        url: `/admin/charity/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Charity"],
    }),
  }),
});

export const {
  useGetDonationHistoryQuery,
  useAddCharityMutation,
  useGetCharityQuery,
  useDeleteCharityMutation,
} = charityApi;

export default charityApi;
