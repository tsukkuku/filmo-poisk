import { api } from "@/shared/api";
import type { MovieList } from "@/shared/types";

const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCinema: build.query<MovieList, { value: string; page: number }>({
      query: ({ value, page }) => ({
        url: "api/v2.2/films",
        params: {
          order: "NUM_VOTE",
          keyword: value,
          page: page,
        },
      }),
    }),
  }),
});

export const { useGetCinemaQuery } = searchApi;
