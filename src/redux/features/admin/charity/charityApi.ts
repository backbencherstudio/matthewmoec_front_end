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
  }),
});

export const { useGetDonationHistoryQuery } = charityApi;

export default charityApi;
