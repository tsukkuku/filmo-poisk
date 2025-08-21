import { useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { MovieCard } from "@/entities/movie/card";
import { Filters } from "@/widgets/filters";
import style from "./style.module.scss";

export const FavoritePage = () => {
  const movies = useAppSelector((state) => state.favorite.movies);
  const [filtered, setFiltered] = useState(movies);

  return (
    <div className={style.FavoritePage}>
      <div className={style.Titles}>
        <h2 className={style.Title}>Избранные фильмы и сериалы</h2>
        <div className={style.Filters}>
          <Filters movies={movies} onChange={setFiltered} />
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className={style.MovieList}>
          {filtered.map((movie) => (
            <MovieCard movie={movie} key={movie.kinopoiskId} />
          ))}
        </div>
      ) : (
        <div className={style.Empty}>Пока у вас нету избранного</div>
      )}
    </div>
  );
};
