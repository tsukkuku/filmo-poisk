import { getLocalStorage } from "@/shared/lib";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: getLocalStorage("yandex-token", null),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("yandex-token", JSON.stringify(state.token));
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("yandex-token");
    },
  },
});

export const { login, logout } = authSlice.actions;
