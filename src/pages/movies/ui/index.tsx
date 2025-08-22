import { useState } from "react";
import { useGetSortedFilmsQuery } from "../api";
import { Filters } from "@/widgets/filters";
import { PaginationButton } from "./pagination-button";
import { List } from "./list";
import { useTitle } from "@/shared/lib";
import style from "./style.module.scss";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetSortedFilmsQuery(page);
  const [filtered, setFiltered] = useState(data?.items || []);

  useTitle("Подборка");

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
        <List filtered={filtered} />
      </div>
      <PaginationButton page={page} changePage={changePage} />
    </div>
  );
};

export default Movies;
