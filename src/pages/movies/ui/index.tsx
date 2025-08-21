import { MovieCard } from "@/entities/movie/card";
import { useGetSortedFilmsQuery } from "../api";
import { Filters } from "@/widgets/filters";
import { useState } from "react";
import { Button } from "@/shared/ui";
import clsx from "clsx";
import style from "./style.module.scss";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetSortedFilmsQuery(page);
  const [filtered, setFiltered] = useState(data?.items || []);

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div className={style.FilmsPage}>
      <Filters
        movies={data?.items || []}
        onChange={setFiltered}
        className={style.FiltersFilms}
      />
      <div className={style.FilmList}>
        {filtered.length > 0 ? (
          filtered.map((movie) => (
            <MovieCard movie={movie} key={movie.kinopoiskId} />
          ))
        ) : (
          <div>Ничего не найдено</div>
        )}
      </div>
      <div className={style.PageButton}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Button
            key={index}
            onClick={() => changePage(item)}
            className={clsx(
              style.Pagination,
              page === item ? style.Active : style
            )}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Movies;
