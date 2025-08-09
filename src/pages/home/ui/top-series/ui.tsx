import { FilmCategory } from "@/widgets/film-category";
import { FilmList } from "@/widgets/film-list";
import { useGetTopSeriesQuery } from "@/pages/home/api";

export const TopSeries = () => {
  const { data } = useGetTopSeriesQuery();

  if (!data) return;

  return (
    <FilmList title="Сериалы из Топ-250 Кинопоиска">
      <FilmCategory movies={data} />
    </FilmList>
  );
};
