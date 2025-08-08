import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useModal } from "./use-modal";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import type { ReactNode } from "react";
import { modalReducer } from "@/shared/ui";

const mockStore = configureStore({
  reducer: {
    modal: modalReducer,
  },
  preloadedState: {
    modal: { isOpen: false },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={mockStore}>{children}</Provider>
);

describe("useModal hook tests", () => {
  test("check state from redux", () => {
    const { result } = renderHook(() => useModal(), { wrapper });

    expect(result.current.isOpen).toBe(false);
  });
  test("check open function", () => {
    const { result } = renderHook(() => useModal(), { wrapper });

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });
  test("check close function", () => {
    const { result } = renderHook(() => useModal(), { wrapper });

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });
  test("check open & close modal", () => {
    const { result } = renderHook(() => useModal(), { wrapper });

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
