import { getLocalStorage } from "@/shared/lib";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  googleToken: getLocalStorage("google-token", null),
};

export const googleSlice = createSlice({
  name: "google-auth",
  initialState,
  reducers: {
    googleLogin: (state, action: PayloadAction<string>) => {
      state.googleToken = action.payload;
      localStorage.setItem("google-token", JSON.stringify(state.googleToken));
    },
    googleLogout: (state) => {
      state.googleToken = null;
      localStorage.removeItem("google-token");
    },
  },
});

export const { googleLogin, googleLogout } = googleSlice.actions;
