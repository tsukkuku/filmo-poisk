import { useEffect, useRef, useState } from "react";
import { MovieCard } from "@/entities/movie/card";
import type { MovieList } from "@/shared/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButton } from "./swiper-button";

import "swiper/swiper-bundle.css";
import style from "./style.module.scss";

interface FilmCategoryProps {
  movies: MovieList;
}

export const FilmCategory = ({ movies }: FilmCategoryProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const nextEl = useRef<HTMLButtonElement | null>(null);
  const prevEl = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Swiper
        navigation={
          isMounted && { nextEl: nextEl.current, prevEl: prevEl.current }
        }
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={18}
        className={style.Swiper}
      >
        {movies.items.map((movie) => (
          <SwiperSlide key={movie.kinopoiskId} className={style.Slides}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
        <SwiperButton ref={prevEl} className={style.prev}>
          <IoIosArrowBack size={30} color="var(--button-text)" />
        </SwiperButton>
        <SwiperButton ref={nextEl} className={style.next}>
          <IoIosArrowForward size={30} color="var(--button-text)" />
        </SwiperButton>
      </Swiper>
    </>
  );
};
