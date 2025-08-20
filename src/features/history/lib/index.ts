import type { MoviePageInfo } from "@/pages/movie-page/api";
import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import { addToHistory } from "../model/slice";

export const useMovieHistory = (movie?: MoviePageInfo) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || !movie.kinopoiskId) return;
    dispatch(addToHistory(movie));
  }, [dispatch, movie?.kinopoiskId]);
};
