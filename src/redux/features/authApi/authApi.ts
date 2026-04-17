import baseApi from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),

    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password/send-otp",
          method: "POST",
          body: data,
        };
      },
    }),

    VerifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password/verify-otp",
          method: "POST",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password/reset-password",
          method: "POST",
          body: data,
        };
      },
    }),

    logout: builder.mutation({
      query: () => {
        return {
          url: "/auth/logout",
          method: "POST",
        };
      },
    }),

    getMe: builder.query({
      query: () => {
        return {
          url: "/auth/me",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useGetMeQuery,
  useLogoutMutation,
} = authApi;

export default authApi;
