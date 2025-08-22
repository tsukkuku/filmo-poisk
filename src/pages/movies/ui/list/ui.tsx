import { MovieCard } from "@/entities/movie/card";
import type { MoviePageInfo } from "@/shared/types";
import style from "./style.module.scss";

interface ListProps {
  filtered: MoviePageInfo[];
}

export const List = ({ filtered }: ListProps) => {
  return (
    <>
      {filtered.length > 0 ? (
        filtered.map((movie) => (
          <MovieCard movie={movie} key={movie.kinopoiskId} />
        ))
      ) : (
        <div className={style.Empty}>Ничего не найдено</div>
      )}
    </>
  );
};
