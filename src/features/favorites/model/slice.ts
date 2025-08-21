import { getLocalStorage } from "@/shared/lib";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FavoriteState } from "./types";
import { showToast } from "../lib";
import type { MoviePageInfo } from "@/shared/types";

const initialState: FavoriteState = {
  movies: getLocalStorage("favorite-movies", []),
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MoviePageInfo>) => {
      const findMovie = state.movies.find(
        (movie) => movie.kinopoiskId === action.payload.kinopoiskId
      );

      if (!findMovie) {
        state.movies.push(action.payload);
        showToast(`Добавили в "Избранное"`);
      } else {
        state.movies = state.movies.filter(
          (movie) => movie.kinopoiskId !== action.payload.kinopoiskId
        );
        showToast(`Убрали из "Избранное"`);
      }
      localStorage.setItem("favorite-movies", JSON.stringify(state.movies));
    },
    resetMovie: (state) => {
      state.movies = [];
      localStorage.removeItem("favorite-movies");
    },
  },
});

export const { addMovie, resetMovie } = favoriteSlice.actions;
