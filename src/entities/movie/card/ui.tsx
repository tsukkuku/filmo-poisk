import { memo } from "react";
import type { MovieInfo } from "@/shared/types";
import { Link } from "react-router-dom";
import { MovieRating } from "@/shared/ui";
import style from "./style.module.scss";

interface MovieCardProps {
  movie: MovieInfo;
}

export const MovieCard = memo(({ movie }: MovieCardProps) => {
  return (
    <div className={style.Photo}>
      <Link to={`/film/${movie.kinopoiskId}`}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={style.Image}
        />
        {movie.ratingKinopoisk && (
          <div className={style.Rating}>
            <MovieRating
              rating={movie.ratingKinopoisk}
              className={style.MovieRating}
            />
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
