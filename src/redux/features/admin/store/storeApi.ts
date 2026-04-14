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
    }),
  }),
});

export const { useCreateStoreMutation } = storeApi;

export default storeApi;
