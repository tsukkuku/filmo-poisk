import type { ReactNode } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { modalReducer } from "../../ui";

interface TestProviderProps {
  children: ReactNode;
  preloadedState?: { modal: { isOpen: boolean } };
}

export const createMockStore = (
  preloadedState = { modal: { isOpen: false } }
) => {
  return configureStore({
    reducer: {
      modal: modalReducer,
    },
    preloadedState,
  });
};

export const ModalProvider = ({
  children,
  preloadedState,
}: TestProviderProps) => {
  const mockStore = createMockStore(preloadedState);
  return <Provider store={mockStore}>{children}</Provider>;
};
