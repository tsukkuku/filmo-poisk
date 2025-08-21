import { api } from "@/shared/api";
import type { Movies } from "@/shared/types";

export const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSortedFilms: build.query<Movies, number>({
      query: (page) => ({
        url: `api/v2.2/films`,
        params: {
          order: "NUM_VOTE",
          page,
        },
      }),
    }),
  }),
});

export const { useGetSortedFilmsQuery } = moviesApi;
