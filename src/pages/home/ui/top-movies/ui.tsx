import { useGetTopMoviesQuery } from "@/pages/home/api";
import { FilmList } from "@/widgets/film-list";
import { FilmCategory } from "@/widgets/film-category";

export const TopMovies = () => {
  const { data } = useGetTopMoviesQuery();

  if (!data) return;
  return (
    <FilmList title="Фильмы из Топ-250 Кинопоиска">
      <FilmCategory movies={data} />
    </FilmList>
  );
};
