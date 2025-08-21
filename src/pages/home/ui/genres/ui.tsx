import { Link } from "react-router-dom";
import { genres } from "./config";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/swiper-bundle.css";
import style from "./style.module.scss";

export const Genres = () => {
  return (
    <section className={style.Genres__Section}>
      <h2 className={style.SectionTitle}>Жанры</h2>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={18}
        slidesPerView="auto"
        className={style.GenreSwiper}
      >
        {genres.map((genre) => (
          <SwiperSlide className={style.GenreSlides} key={genre.genre}>
            <div className={style.GenreButton}>
              <Link
                to={{
                  pathname: "/films",
                  search: `?genre=${genre.genre.toLowerCase()}`,
                }}
                className={style.GenreLink}
              >
                {genre.icon} {genre.genre}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
