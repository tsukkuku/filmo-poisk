import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HistoryState } from "./types";
import { getLocalStorage } from "@/shared/lib";
import type { MoviePageInfo } from "@/pages/movie-page/api";

const initialState: HistoryState = {
  movie: getLocalStorage("history", []),
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<MoviePageInfo>) => {
      if (!action.payload.kinopoiskId) return;

      const findMovie = state.movie.find(
        (movie) => movie?.kinopoiskId === action.payload.kinopoiskId
      );

      if (!findMovie) {
        state.movie.push(action.payload);
      }

      if (state.movie.length > 20) {
        state.movie.shift();
      }

      localStorage.setItem("history", JSON.stringify(state.movie));
    },
    resetHistory: (state) => {
      state.movie = [];
      localStorage.removeItem("history");
    },
  },
});

export const { addToHistory, resetHistory } = historySlice.actions;
