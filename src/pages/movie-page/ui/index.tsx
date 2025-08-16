import { useParams } from "react-router-dom";
import { useGetMovieInfoQuery } from "../api";
import { ClipLoader } from "react-spinners";
import { MovieTitle } from "./title";
import { MovieInfo } from "./info";
import { Description } from "./description";
import { SimilarMovie } from "./similar-movie";
import { MovieFacts } from "./movie-facts";
import { Actors } from "./actors";
import style from "./style.module.scss";

const MoviePage = () => {
  const { id = "" } = useParams();
  const { data: movie, isLoading } = useGetMovieInfoQuery(id);

  if (isLoading) return <ClipLoader color="var(--text-color)" />;
  if (!movie) return <div>Фильм или сериал не найден</div>;

  return (
    <div className={style.MoviePage}>
      <MovieTitle movie={movie} />
      <MovieInfo id={id} movie={movie} />
      <Description movie={movie} />
      <SimilarMovie id={id} />
      <MovieFacts id={id} />
      <Actors id={id} />
    </div>
  );
};

export default MoviePage;
