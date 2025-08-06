import { api } from "@/shared/api";
import type { Movies } from "@/shared/types";

const selectionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<Movies, void>({
      query: () => ({
        url: "movie",
        params: {
          type: "movie",
          "countries.name": "Россия",
          "genres.name": "комедия",
          "votes.kp": "300000-6000000",
          limit: 15,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = selectionApi;
