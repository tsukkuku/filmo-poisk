import { useState, type ChangeEvent } from "react";
import { useGetCinemaQuery } from "@/features/search/api";
import { useDebounce, usePagination } from "../lib";
import { useAppSelector } from "@/shared/lib";
import { useInView } from "react-intersection-observer";
import { ScrollButton } from "./scroll-button";

import { ClipLoader } from "react-spinners";
import { Input } from "@/shared/ui";
import { FaSearch } from "react-icons/fa";
import { MovieCard } from "@/entities/movie/card";

import style from "./style.module.scss";

export const Search = () => {
  const page = useAppSelector((state) => state.page.page);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const { ref: inputRef, inView } = useInView({ threshold: 1 });

  const {
    data: cinema,
    isFetching,
    isUninitialized,
  } = useGetCinemaQuery(
    { value: debouncedValue, page },
    {
      skip: !debouncedValue,
    }
  );

  const { movies, ref } = usePagination(cinema!, debouncedValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.Search}>
      <Input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        placeholder="Введите название фильма или сериала"
        startContent={<FaSearch size={25} />}
      />
      <ScrollButton inView={inView} />
      {movies && (
        <>
          <div className={style.SectionTitle}>
            <h1 className={style.Title}>
              {isUninitialized && "Пока ничего нет :("}
              {!movies.length && !isUninitialized && "Ничего не найдено"}
              {movies.length > 0 && "Фильмы и сериалы"}
            </h1>
          </div>
          <div className={style.SearchContent}>
            {movies.map((movie) => (
              <MovieCard key={movie.kinopoiskId} movie={movie} />
            ))}
          </div>
          <div ref={ref} className={style.Loader}>
            {isFetching && <ClipLoader color="var(--text-color)" size={60} />}
          </div>
        </>
      )}
    </div>
  );
};
