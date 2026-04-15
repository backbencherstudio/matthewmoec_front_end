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
  }),
});

export const { useGetDonationHistoryQuery, useAddCharityMutation } = charityApi;

export default charityApi;
