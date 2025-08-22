import { useEffect, useState } from "react";
import type { MoviePageInfo } from "@/shared/types";
import { randomMovies } from "./random-movies";

export const useSimilarMovies = () => {
  const [movies, setMovies] = useState<MoviePageInfo[]>([]);

  useEffect(() => {
    const savedPlayers = localStorage.getItem("favorite-movies");

    if (savedPlayers) {
      const randomMovie = randomMovies(JSON.parse(savedPlayers));
      setMovies(randomMovie);
    }
  }, []);

  return movies;
};
