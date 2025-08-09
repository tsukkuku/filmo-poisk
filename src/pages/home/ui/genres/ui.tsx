import { Link } from "react-router-dom";
import { genres } from "./config";

import "swiper/swiper-bundle.css";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

export const Genres = () => {
  return (
    <section className={style.Genres__Section}>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={18}
        slidesPerView="auto"
        className={style.GenreSwiper}
      >
        {genres.map((genre) => (
          <SwiperSlide className={style.GenreSlides}>
            <div className={style.GenreButton}>
              <Link to={"/"} className={style.GenreLink}>
                {genre.genre}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
