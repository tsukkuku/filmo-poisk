import { useGetComedyMoviesQuery } from "@/pages/home/api";
import { FilmCategory } from "@/widgets/film-category";
import { FilmList } from "@/widgets/film-list";

export const Comedy = () => {
  const { data } = useGetComedyMoviesQuery();

  if (!data) return;

  return (
    <FilmList title="Комедии">
      <FilmCategory movies={data} />
    </FilmList>
  );
};
