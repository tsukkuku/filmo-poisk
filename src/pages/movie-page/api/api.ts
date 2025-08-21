import { api } from "@/shared/api";
import type { MoviePageInfo } from "@/shared/types";
import type {
  MovieFacts,
  PersonInfo,
  PremiereInfo,
  SequelMovie,
  SimilarMovies,
} from "./types";

const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieInfo: build.query<MoviePageInfo, string>({
      query: (id) => ({
        url: `api/v2.2/films/${id}`,
      }),
    }),
    getMovieFacts: build.query<MovieFacts, string>({
      query: (id) => ({
        url: `api/v2.2/films/${id}/facts`,
      }),
    }),
    getPremiereInfo: build.query<PremiereInfo, number>({
      query: (id) => ({
        url: `api/v2.2/films/${id}/distributions`,
      }),
    }),
    getSerialSeasons: build.query<{ total: number }, number>({
      query: (id) => ({
        url: `api/v2.2/films/${id}/seasons`,
      }),
    }),
    getSequelsMovie: build.query<SequelMovie[], number>({
      query: (id) => ({
        url: `api/v2.1/films/${id}/sequels_and_prequels`,
      }),
    }),
    getSimilarMovie: build.query<SimilarMovies, string>({
      query: (id) => ({
        url: `api/v2.2/films/${id}/similars`,
      }),
    }),
    getPersonsInfo: build.query<PersonInfo[], number>({
      query: (id) => ({
        url: `api/v1/staff`,
        params: {
          filmId: id,
        },
      }),
    }),
  }),
});

export const {
  useGetMovieInfoQuery,
  useGetMovieFactsQuery,
  useGetPremiereInfoQuery,
  useGetSimilarMovieQuery,
  useGetSerialSeasonsQuery,
  useGetPersonsInfoQuery,
  useGetSequelsMovieQuery,
} = movieApi;
