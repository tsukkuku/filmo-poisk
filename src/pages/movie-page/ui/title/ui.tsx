import type { MoviePageInfo } from "@/shared/types";
import { ageLimit, declineRatings } from "../../lib";
import { MovieRating } from "@/shared/ui";
import style from "./style.module.scss";

interface MovieTitleProps {
  movie: MoviePageInfo;
}

export const MovieTitle = ({ movie }: MovieTitleProps) => {
  return (
    <div className={style.MovieInfo}>
      <div className={style.TitleSection}>
        <div className={style.MovieTitle}>
          {movie.nameRu || movie.nameOriginal} (
          {movie.serial
            ? `${movie.startYear} - ${movie.endYear || "..."}`
            : movie.year}
          )
        </div>
        {movie.nameRu && (
          <div className={style.MovieOriginal__Title}>
            {movie.nameOriginal} {ageLimit(movie.ratingAgeLimits)}
          </div>
        )}
        <div className={style.MovieShort__Desc}>{movie.shortDescription}</div>
      </div>
      {movie.ratingKinopoisk && (
        <div className={style.RatingSection}>
          <MovieRating
            rating={movie.ratingKinopoisk}
            className={style.MovieRating}
          />
          <div className={style.MovieVotes}>
            {declineRatings(movie.ratingKinopoiskVoteCount)}
          </div>
        </div>
      )}
    </div>
  );
};
