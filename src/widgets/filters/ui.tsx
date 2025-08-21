import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/features/search/lib";
import type { MoviePageInfo } from "@/shared/types";
import { GENRES } from "@/shared/constants";
import { Button, Input } from "@/shared/ui";
import clsx from "clsx";
import style from "./style.module.scss";

interface FilteredSelectProps {
  movies: MoviePageInfo[];
  onChange: (filtered: MoviePageInfo[]) => void;
  className?: string;
}

export const Filters = ({
  movies,
  onChange,
  className,
}: FilteredSelectProps) => {
  const [value, setValue] = useState("");
  const search = useDebounce(value);
  const [sort, setSort] = useState("rating");
  const [type, setType] = useState("all");
  const [genre, setGenre] = useState("all");
  const [searchParams] = useSearchParams();

  const filteredAndSorted = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = movies.filter((movie) => {
      if (type !== "all" && movie.type !== type) return false;
      if (
        genre !== "all" &&
        !(movie.genres || []).some(
          (g) => g.genre.toLowerCase() === genre.toLowerCase()
        )
      )
        return false;
      if (query) {
        const inRu = (movie.nameRu || "").toLowerCase().includes(query);
        const inOrig = (movie.nameOriginal || "").toLowerCase().includes(query);
        if (!inRu && !inOrig) return false;
      }
      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case "year":
          return b.year - a.year;
        case "title": {
          const aTitle = (a.nameRu || a.nameOriginal || "").toLowerCase();
          const bTitle = (b.nameRu || b.nameOriginal || "").toLowerCase();
          return aTitle.localeCompare(bTitle);
        }
        case "rating":
        default:
          return (b.ratingKinopoisk || 0) - (a.ratingKinopoisk || 0);
      }
    });

    return sorted;
  }, [movies, search, type, genre, sort]);

  useEffect(() => {
    onChange(filteredAndSorted);
  }, [filteredAndSorted, onChange]);

  useEffect(() => {
    const urlGenre = searchParams.get("genre");
    if (urlGenre && urlGenre !== genre) {
      setGenre(urlGenre);
    }
  }, [searchParams]);

  const resetFilters = () => {
    setValue("");
    setSort("rating");
    setType("all");
    setGenre("all");
  };

  return (
    <div className={clsx(style.FilteredSelect, className)}>
      <div className={style.SearchInput}>
        <Input
          placeholder="Поиск по названию"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <select
        className={style.Select}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">Тип</option>
        <option value="FILM">Фильм</option>
        <option value="TV_SERIES">Сериал</option>
      </select>
      <select
        className={style.Select}
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="all">Все жанры</option>
        {GENRES.map((g) => (
          <option key={g.id} value={g.genre}>
            {g.genre}
          </option>
        ))}
      </select>
      <select
        className={style.Select}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="rating">По рейтингу Кинопоиска</option>
        <option value="year">По году выпуска</option>
        <option value="title">По названию</option>
      </select>
      <Button onClick={resetFilters}>Сбросить фильтры</Button>
    </div>
  );
};
