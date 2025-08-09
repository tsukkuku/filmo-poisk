import { api } from "@/shared/api";
import type { MovieList } from "@/shared/types";

const selectionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTopMovies: build.query<MovieList, void>({
      query: () => ({
        url: "api/v2.2/films/collections",
        params: {
          type: "TOP_250_MOVIES",
          page: 1,
        },
      }),
    }),
    getTopSeries: build.query<MovieList, void>({
      query: () => ({
        url: "api/v2.2/films/collections",
        params: {
          type: "TOP_250_TV_SHOWS",
          page: 1,
        },
      }),
    }),
    getComedyMovies: build.query<MovieList, void>({
      query: () => ({
        url: "api/v2.2/films",
        params: {
          countries: 1,
          genres: 13,
          order: "NUM_VOTE",
          type: "FILM",
          ratingFrom: 7,
          ratingTo: 10,
          page: 2,
        },
      }),
    }),
    getFantasyMovies: build.query<MovieList, void>({
      query: () => ({
        url: "api/v2.2/films",
        params: {
          genres: 12,
          order: "NUM_VOTE",
          type: "FILM",
          ratingFrom: 7,
          ratingTo: 10,
        },
      }),
    }),
    getFamilyMovies: build.query<MovieList, void>({
      query: () => ({
        url: "api/v2.2/films",
        params: {
          genres: 18,
          order: "NUM_VOTE",
          type: "FILM",
          ratingFrom: 7,
          ratingTo: 10,
          page: 2,
        },
      }),
    }),
  }),
});

export const {
  useGetTopMoviesQuery,
  useGetTopSeriesQuery,
  useGetComedyMoviesQuery,
  useGetFantasyMoviesQuery,
  useGetFamilyMoviesQuery,
} = selectionApi;
