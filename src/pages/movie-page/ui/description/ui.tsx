import type { MoviePageInfo } from "@/pages/movie-page/api";
import style from "./style.module.scss";

interface DescriptionProps {
  movie: MoviePageInfo;
}

export const Description = ({ movie }: DescriptionProps) => {
  return (
    <>
      {movie.description && (
        <div className={style.MovieDesc}>
          <div className={style.DescTitle}>Обзор</div>
          <p className={style.Desc}>{movie.description}</p>
        </div>
      )}
    </>
  );
};
