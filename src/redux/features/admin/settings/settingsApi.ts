import baseApi from "@/redux/api/baseApi";

const SettingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateAppConfiguration: builder.mutation({
      query: (data) => ({
        url: "/admin/app-configuration",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Settings"],
    }),

    getAppConfiguration: builder.query({
      query: () => ({
        url: "/admin/app-configuration",
        method: "GET",
      }),
      providesTags: ["Settings"],
    }),
  }),
});

export const {
  useGetAppConfigurationQuery,
  useUpdateAppConfigurationMutation,
} = SettingsApi;

export default SettingsApi;
