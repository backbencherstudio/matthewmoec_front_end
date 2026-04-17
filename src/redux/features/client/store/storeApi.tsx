import baseApi from "@/redux/api/baseApi";

const storeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    clickStore: builder.mutation({
      query: (id: string) => ({
        url: `/store/${id}/clicks`,
        method: "POST",
      }),
      invalidatesTags: ["Store"],
    }),

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

export const { useGetAllStoresQuery, useClickStoreMutation } = storeApi;

export default storeApi;
