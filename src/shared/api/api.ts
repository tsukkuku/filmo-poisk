import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/",
    headers: {
      "X-API-KEY": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  }),
  endpoints: () => ({}),
});
