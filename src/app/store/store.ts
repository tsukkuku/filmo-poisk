import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/shared/api";
import { themeReducer } from "@/features/switch-theme";
import { authReducer } from "@/features/auth/yandex";
import { googleReducer } from "@/features/auth/google";
import { modalReducer } from "@/shared/ui";
import { pageReducer } from "@/features/search";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: themeReducer,
    auth: authReducer,
    google: googleReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
