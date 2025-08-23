import { Link } from "react-router-dom";
import { useGetSimilarMovieQuery } from "@/pages/movie-page/api";
import style from "./style.module.scss";

interface SimilarMovieProps {
  id: string;
}

export const SimilarMovie = ({ id }: SimilarMovieProps) => {
  const { data: movie } = useGetSimilarMovieQuery(id);

  if (!movie) return <div>Нет похожих фильмов</div>;

  return (
    <>
      {movie.items.length > 0 && (
        <div className={style.SimilarMovie__Section}>
          <h3 className={style.SectionTitle}>Похожие фильмы</h3>
          <div className={style.SimilarMovies}>
            {movie.items
              .map((movie) => (
                <div key={movie.filmId} className={style.Similar__Movie}>
                  <Link to={`/film/${movie.filmId}`} className={style.Link}>
                    <img
                      src={movie.posterUrlPreview}
                      alt={movie.nameOriginal}
                      loading="lazy"
                      className={style.MoviePoster}
                    />
                    <div className={style.MovieTitle}>
                      {movie.nameRu || movie.nameOriginal}
                    </div>
                  </Link>
                </div>
              ))
              .slice(0, 5)}
          </div>
        </div>
      )}
    </>
  );
};
