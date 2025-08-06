import { useGetMoviesQuery } from "@/pages/home/api";
import { FilmList } from "@/widgets/film-list";
import { FilmCategory } from "@/widgets/film-category";

export const RussianComedy = () => {
  const { data } = useGetMoviesQuery();

  if (!data) return;
  return (
    <FilmList title="Русские комедии">
      <FilmCategory movies={data} />
    </FilmList>
  );
};
