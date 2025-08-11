import { useAppDispatch, useAppSelector } from "@/shared/lib";
import type { MovieInfo, MovieList } from "@/shared/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { resetPage, setPage } from "../model";

export const usePagination = (data: MovieList, value: string) => {
  const page = useAppSelector((state) => state.page.page);
  const dispatch = useAppDispatch();
  const [movies, setMovies] = useState<MovieInfo[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setMovies(data.items);
    } else {
      setMovies((prev) => [...prev, ...data.items]);
    }

    setHasMore(page < data.totalPages);
  }, [data?.items]);

  useEffect(() => {
    if (inView && data?.items && hasMore) {
      dispatch(setPage(page + 1));
    }
  }, [inView]);

  useEffect(() => {
    dispatch(resetPage());
    setMovies([]);
  }, [value]);

  return { ref, movies };
};
