import {
  useGetPersonsInfoQuery,
  useGetPremiereInfoQuery,
  useGetSequelsMovieQuery,
  useGetSerialSeasonsQuery,
  type MoviePageInfo,
} from "@/pages/movie-page/api";
import { Link } from "react-router-dom";
import { ageLimit, declineSeasons, mpaaLimit } from "@/pages/movie-page/lib";
import { formatDate } from "@/shared/lib";
import { goToActors } from "../actors";
import { Sequels } from "./sequels";
import { InfoRow } from "@/widgets/info-row";
import { FavoriteImage } from "@/features/favorites";
import style from "./style.module.scss";

interface MovieInfoProps {
  id: string;
  movie: MoviePageInfo;
}

export const MovieInfo = ({ id, movie }: MovieInfoProps) => {
  const { data: person } = useGetPersonsInfoQuery(parseInt(id));
  const { data: movies } = useGetSequelsMovieQuery(parseInt(id));
  const { data: seasons } = useGetSerialSeasonsQuery(parseInt(id), {
    skip: !movie.serial,
  });
  const { data: premiere } = useGetPremiereInfoQuery(parseInt(id));

  const worldPremiere = premiere?.items.find(
    (movie) => movie.type === "WORLD_PREMIER"
  );

  const russianPremiere = premiere?.items.find(
    (movie) => movie.type === "COUNTRY_SPECIFIC"
  );

  if (!person) return;

  return (
    <div className={style.MovieInfo__Section}>
      <FavoriteImage id={id} movie={movie} />
      <div className={style.MovieInfo}>
        <InfoRow title="Год производства">
          {movie.year}{" "}
          {movie.serial &&
            seasons?.total &&
            `(${declineSeasons(seasons?.total)})`}
        </InfoRow>
        <InfoRow title="Страна">
          {movie.countries.map((country) => country.country).join(", ")}
        </InfoRow>
        <InfoRow title="Жанр">
          {movie.genres.map((genre) => genre.genre).join(", ")}
        </InfoRow>
        <InfoRow title="Слоган">
          <span className={style.Slogan}>«{movie.slogan || "---"}»</span>
        </InfoRow>
        <InfoRow title="Режиссер">
          <Link className={style.Actor} to={`/name/${person[0].staffId}`}>
            {person[0].nameRu || person[0].nameEn}
          </Link>
        </InfoRow>
        <InfoRow title="Актеры">
          {person
            .filter((person) => person.professionKey === "ACTOR")
            .slice(0, 3)
            .map((actor) => (
              <Link
                key={actor.staffId}
                className={style.Actor}
                to={`/name/${actor.staffId}`}
              >
                {actor.nameRu || actor.nameEn}
              </Link>
            ))}
          <div onClick={goToActors} className={style.Go__Actors}>
            ...
          </div>
        </InfoRow>
        {worldPremiere && (
          <InfoRow title="Премьера в мире">
            {formatDate(worldPremiere.date)}
          </InfoRow>
        )}
        {russianPremiere && (
          <InfoRow title="Премьера в России">
            {formatDate(russianPremiere.date)}
          </InfoRow>
        )}
        <InfoRow title="Возраст">{ageLimit(movie.ratingAgeLimits)}</InfoRow>
        {movie.ratingMpaa && (
          <InfoRow title="Рейтинг MPAA">{mpaaLimit(movie.ratingMpaa)}</InfoRow>
        )}
        {movie.filmLength && (
          <InfoRow title="Время">{movie.filmLength} мин.</InfoRow>
        )}
        {movies && (
          <div className={style.SequelsSection}>
            <div className={style.SectionTitle}>Сиквелы и приквелы</div>
            <Sequels movie={movies} />
          </div>
        )}
      </div>
    </div>
  );
};
