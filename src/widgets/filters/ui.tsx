import { useMemo, useState, useEffect } from "react";
import { Button, Input } from "@/shared/ui";
import { GENRES } from "@/shared/constants";
import type { MoviePageInfo } from "@/pages/movie-page/api";
import style from "./style.module.scss";

interface FilteredSelectProps {
  movies: MoviePageInfo[];
  onChange: (filtered: MoviePageInfo[]) => void;
}

export const Filters = ({ movies, onChange }: FilteredSelectProps) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("rating");
  const [type, setType] = useState("all");
  const [genre, setGenre] = useState("all");

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

  const resetFilters = () => {
    setSearch("");
    setSort("rating");
    setType("all");
    setGenre("all");
  };

  return (
    <div className={style.FilteredSelect}>
      <div className={style.SearchInput}>
        <Input
          placeholder="Поиск по названию"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
