import type { SimilarMovies } from "@/pages/movie-page/api";
import { api } from "@/shared/api";

export const similarApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSimilarMovies: build.query<SimilarMovies, number>({
      query: (id) => ({
        url: `api/v2.2/films/${id}/similars`,
      }),
    }),
  }),
});

export const { useGetSimilarMoviesQuery } = similarApi;
