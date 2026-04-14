import baseApi from "@/redux/api/baseApi";

const storeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStore: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/store",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Store"],
    }),

    getAllStores: builder.query({
      query: () => ({
        url: "/admin/store",
        method: "GET",
      }),
      providesTags: ["Store"],
    }),

    updateStore: builder.mutation({
      query: ({ id, body }) => ({
        url: `/admin/store/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Store"],
    }),

    deleteStore: builder.mutation({
      query: (id: string) => ({
        url: `/admin/store/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Store"],
    }),
  }),
});

export const {
  useCreateStoreMutation,
  useGetAllStoresQuery,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
} = storeApi;

export default storeApi;
