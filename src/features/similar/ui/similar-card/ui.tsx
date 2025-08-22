import { Link } from "react-router-dom";
import { useGetSimilarMoviesQuery } from "@/features/similar/api";
import style from "./style.module.scss";

interface SimilarCardProps {
  id: number;
  name: string;
}

export const SimilarCard = ({ id, name }: SimilarCardProps) => {
  const { data } = useGetSimilarMoviesQuery(id);

  return (
    <div className={style.Similar}>
      <Link
        to={`/filmo-poisk/film/${data?.items[0].filmId}`}
        className={style.Link}
      >
        <img
          src={data?.items[0].posterUrlPreview}
          alt={data?.items[0].nameRu}
          className={style.SimilarPoster}
        />
        <div className={style.SimilarTitle}>
          <div className={style.Title}>{data?.items[0].nameRu}</div>
          <div className={style.secondTitle}>(похоже на {name})</div>
        </div>
      </Link>
    </div>
  );
};
