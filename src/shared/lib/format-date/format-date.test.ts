import { describe, expect, test } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate helper tests", () => {
  test("valid date", () => {
    expect(formatDate("2021-06-25")).toBe("June 25, 2021");
  });
  test("invalid date", () => {
    expect(formatDate("jdsgdsg2021-06-25")).toBe("Invalid Date");
  });
});
