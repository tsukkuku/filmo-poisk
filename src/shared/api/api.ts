import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    headers: {
      "X-API-KEY": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  }),
  endpoints: () => ({}),
});
