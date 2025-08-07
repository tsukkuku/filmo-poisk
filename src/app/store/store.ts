import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/shared/api";
import { themeReducer } from "@/features/switch-theme";
import { authReducer } from "@/features/auth";
import { modalReducer } from "@/shared/ui";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
