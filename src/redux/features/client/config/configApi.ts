import baseApi from "@/redux/api/baseApi";

const configApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLinks: builder.query({
      query: () => ({
        url: "/app-configuration",
        method: "GET",
      }),
      providesTags: ["Config"],
    }),
  }),
});

export const { useGetLinksQuery } = configApi;

export default configApi;
