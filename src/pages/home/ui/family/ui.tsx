import { FilmCategory } from "@/widgets/film-category";
import { FilmList } from "@/widgets/film-list";
import { useGetFamilyMoviesQuery } from "@/pages/home/api";

export const Family = () => {
  const { data } = useGetFamilyMoviesQuery();

  if (!data) return;

  return (
    <FilmList title="Для всей семьи">
      <FilmCategory movies={data} />
    </FilmList>
  );
};
