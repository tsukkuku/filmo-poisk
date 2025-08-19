import { useState } from "react";
import { Link } from "react-router-dom";
import type { PersonDetails } from "@/pages/person-page/api";
import { MovieRating } from "@/shared/ui";
import clsx from "clsx";
import style from "./style.module.scss";

interface PersonMoviesProps {
  person: PersonDetails;
}

export const PersonMovies = ({ person }: PersonMoviesProps) => {
  const [active, setActive] = useState<string>("ACTOR");

  const role = [
    { type: "ACTOR", title: "Актер" },
    { type: "VOICE_MALE", title: "Актер дубляжа" },
    { type: "VOICE_FEMALE", title: "Актриса дубляжа" },
    { type: "DIRECTOR", title: "Режиссер" },
    { type: "PRODUCER", title: "Продюсер" },
    { type: "WRITER", title: "Сценарист" },
  ];

  const filterdMovies = person.films
    .filter((movie) => movie.professionKey === active)
    .reverse();

  return (
    <div className={style.PersonMovies}>
      <div className={style.ButtonList}>
        {role.map((role) => {
          const hasMovies = person.films.some(
            (movie) => movie.professionKey === role.type
          );
          return (
            <button
              onClick={() => hasMovies && setActive(role.type)}
              key={role.type}
              disabled={!hasMovies}
              className={clsx(
                active === role.type ? style.Button__Active : "",
                style.SwitchButton
              )}
            >
              {role.title}
            </button>
          );
        })}
      </div>
      <div className={style.MovieList}>
        {filterdMovies.length &&
          filterdMovies.map((movie, index) => (
            <div key={index} className={style.MovieCard}>
              <Link to={`/film/${movie.filmId}`} className={style.MovieLink}>
                <div className={style.MovieInfo}>
                  <div className={style.MovieName}>
                    {movie.nameRu || movie.nameEn}
                  </div>
                  {movie.nameEn && (
                    <div className={style.OriginalName}>{movie.nameEn}</div>
                  )}
                  {movie.description && (
                    <div className={style.ActorRole}>{movie.description}</div>
                  )}
                </div>
                <MovieRating
                  rating={parseInt(movie.rating)}
                  className={style.MovieRating}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
