import type { MoviePageInfo } from "@/shared/types";

export const randomMovies = (arr: MoviePageInfo[], count: number = 6) => {
  const randomEl = [...arr].sort(() => 0.5 - Math.random());
  return randomEl.slice(0, count);
};
