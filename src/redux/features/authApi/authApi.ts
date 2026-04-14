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
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
} = authApi;

export default authApi;
