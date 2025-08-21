import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import { addToHistory } from "../model/slice";
import type { MoviePageInfo } from "@/shared/types";

export const useMovieHistory = (movie?: MoviePageInfo) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || !movie.kinopoiskId) return;
    dispatch(addToHistory(movie));
  }, [dispatch, movie?.kinopoiskId]);
};
