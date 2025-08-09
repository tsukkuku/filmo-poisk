import { FilmCategory } from "@/widgets/film-category";
import { FilmList } from "@/widgets/film-list";
import { useGetFantasyMoviesQuery } from "@/pages/home/api";

export const Fantasy = () => {
  const { data } = useGetFantasyMoviesQuery();

  if (!data) return;

  return (
    <FilmList title="Фэнтези">
      <FilmCategory movies={data} />
    </FilmList>
  );
};
