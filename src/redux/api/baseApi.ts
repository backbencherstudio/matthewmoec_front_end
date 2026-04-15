/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage?.getItem("access_token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAutoTokenUpdate = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithAutoTokenUpdate,
  tagTypes: ["Store", "Receipts", "Charity", "Settings"],
  endpoints: () => ({}),
});

export default baseApi;
