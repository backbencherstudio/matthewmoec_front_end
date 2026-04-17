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
    getCharity: builder.query({
      query: () => ({
        url: "/charity/last-month",
        method: "GET",
      }),
      providesTags: ["Config"],
    }),
  }),
});

export const { useGetLinksQuery, useGetCharityQuery } = configApi;

export default configApi;
