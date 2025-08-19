import type { SequelMovie } from "@/pages/movie-page/api/types";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import style from "./style.module.scss";

interface SequelsProps {
  movie: SequelMovie[];
}

export const Sequels = ({ movie }: SequelsProps) => {
  return (
    <>
      {movie && (
        <Swiper
          modules={[FreeMode]}
          spaceBetween={18}
          slidesPerView="auto"
          className={style.Swiper}
        >
          {movie?.map((movie) => (
            <SwiperSlide className={style.Slide}>
              <div key={movie.filmId} className={style.Movie}>
                <Link to={`/film/${movie.filmId}`}>
                  <img
                    src={movie.posterUrlPreview}
                    alt={movie.nameOriginal}
                    className={style.MovieImage}
                  />
                  <div className={style.MovieTitle}>
                    {movie.nameRu || movie.nameOriginal}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
