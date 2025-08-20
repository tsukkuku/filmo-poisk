import type { RootState } from "@/app/store/store";

export const inFavorite = (movieId: number) => (state: RootState) =>
  state.favorite.movies.some((movie) => movie.kinopoiskId === movieId);
