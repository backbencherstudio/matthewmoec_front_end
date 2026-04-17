import baseApi from "@/redux/api/baseApi";

const storeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStores: builder.query({
      query: ({ search }: { search?: string }) => ({
        url: "/store",
        method: "GET",
        params: { q: search },
      }),
      providesTags: ["Store"],
    }),
  }),
});

export const { useGetAllStoresQuery } = storeApi;

export default storeApi;
