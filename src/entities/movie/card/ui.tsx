import { BAD_RATING, NEUTRAL_RATING } from "@/shared/constants";
import { memo } from "react";
import type { MovieInfo } from "@/shared/types";
import { Link } from "react-router-dom";
import clsx from "clsx";
import style from "./style.module.scss";

interface MovieCardProps {
  movie: MovieInfo;
}

export const MovieCard = memo(({ movie }: MovieCardProps) => {
  const checkRating = (rating: number) => {
    if (rating <= BAD_RATING) {
      return style.BadRating;
    } else if (rating <= NEUTRAL_RATING) {
      return style.NeutralRating;
    } else {
      return style.GreatRating;
    }
  };

  return (
    <div className={style.Photo}>
      <Link
        to={
          movie.type === "FILM"
            ? `/film/${movie.kinopoiskId}`
            : `/series/${movie.kinopoiskId}`
        }
      >
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={style.Image}
        />
        {movie.ratingKinopoisk && (
          <div className={style.Rating}>
            <div
              className={clsx(
                style.MovieRating,
                checkRating(movie.ratingKinopoisk)
              )}
            >
              {movie.ratingKinopoisk.toFixed(1)}
            </div>
          </div>
        )}
        <div className={style.Overlay}>
          <div className={style.MovieYear}>{movie.year}</div>
          <div className={style.MovieTitle}>{movie.nameRu}</div>
          {movie.countries.length > 0 && (
            <div className={style.MovieCountry}>
              {movie.countries[0].country}
            </div>
          )}
          <div className={style.MovieGenres}>
            {movie.genres.map((g) => g.genre).join(", ")}
          </div>
        </div>
      </Link>
    </div>
  );
});
