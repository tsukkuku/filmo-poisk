import { getLocalStorage } from "@/shared/lib";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: getLocalStorage("token", null),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
