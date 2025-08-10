import { api } from "@/shared/api";
import type { MovieList } from "@/shared/types";

const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCinema: build.query<MovieList, string>({
      query: (value) => ({
        url: "api/v2.2/films",
        params: {
          keyword: value,
        },
      }),
    }),
  }),
});

export const { useGetCinemaQuery } = searchApi;
