import { afterEach, describe, expect, test } from "vitest";
import { getLocalStorage } from "./get-local-storage";

describe("getLocalStorage test", () => {
  afterEach(() => {
    localStorage.clear();
  });
  test("null storage", () => {
    const item = getLocalStorage("theme", "light");
    expect(item).toBe("light");
  });
  test("have string storage", () => {
    localStorage.setItem("theme", JSON.stringify("dark"));
    const item = getLocalStorage("theme", "light");
    expect(item).toBe("dark");
  });
  test("have number storage", () => {
    localStorage.setItem("money", JSON.stringify(560));
    const item = getLocalStorage("money", 0);
    expect(item).toBe(560);
  });
});
