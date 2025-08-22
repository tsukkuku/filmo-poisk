import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useModal } from "./use-modal";
import { ModalProvider } from "../modal-provider/modal-provider";

describe("useModal hook tests", () => {
  test("check state from redux", () => {
    const { result } = renderHook(() => useModal(), { wrapper: ModalProvider });

    expect(result.current.isOpen).toBe(false);
  });
  test("check open function", () => {
    const { result } = renderHook(() => useModal(), { wrapper: ModalProvider });

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });
  test("check close function", () => {
    const { result } = renderHook(() => useModal(), { wrapper: ModalProvider });

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });
  test("check open & close modal", () => {
    const { result } = renderHook(() => useModal(), { wrapper: ModalProvider });

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
