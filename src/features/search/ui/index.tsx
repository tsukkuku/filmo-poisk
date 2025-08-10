import { useState, type ChangeEvent, type FormEvent } from "react";
import { useGetCinemaQuery } from "@/features/search/api";
import { useDebounce } from "../lib";

import { ClipLoader } from "react-spinners";
import { Input } from "@/shared/ui";
import { FaSearch } from "react-icons/fa";
import { MovieCard } from "@/entities/movie/card";

import style from "./style.module.scss";

export const Search = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const {
    data: cinema,
    isLoading,
    isFetching,
  } = useGetCinemaQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={style.Search}>
      <form onSubmit={onSubmit}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Введите название фильма или сериала"
          startContent={<FaSearch size={25} />}
        />
      </form>
      {cinema?.items ? (
        <>
          <div className={style.SectionTitle}>
            <h1 className={style.Title}>
              {cinema.items.length
                ? "Фильмы и сериалы"
                : "По вашему запросу ничего не найдено"}
            </h1>
            {isLoading ||
              (isFetching && (
                <ClipLoader color="var(--text-color)" size={60} />
              ))}
          </div>
          <div className={style.SearchContent}>
            {cinema?.items.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </>
      ) : (
        <div className={style.NullMessage}>Пока здесь ничего нет :(</div>
      )}
    </div>
  );
};
