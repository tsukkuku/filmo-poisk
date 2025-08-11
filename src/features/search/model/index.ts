import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { setPage, resetPage } = pageSlice.actions;
