import { MovieCard } from "@/entities/movie/card";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { resetHistory } from "@/features/history";
import style from "./style.module.scss";

export const History = () => {
  const movies = useAppSelector((state) => state.history.movie);
  const dispatch = useAppDispatch();

  const clearHistory = () => {
    dispatch(resetHistory());
  };

  return (
    <div className={style.HistoryPage}>
      <div className={style.Titles}>
        <h3 className={style.PageTitle}>История просмотра</h3>
        <Button onClick={clearHistory} className={style.ClearButton}>
          Очистить историю
        </Button>
      </div>
      <div className={style.MovieList}>
        {movies.length ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className={style.Empty}>У вас пока нет истории просмотров</div>
        )}
      </div>
    </div>
  );
};
