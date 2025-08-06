import type { MovieInfo } from "@/shared/types";
import style from "./style.module.scss";

interface MovieCardProps {
  movie: MovieInfo;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className={style.Photo}>
      <img
        src={movie.poster.previewUrl}
        alt={movie.name}
        className={style.Image}
      />
    </div>
  );
};
