import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { MovieRating } from "./ui";

describe("Movie rating tests", () => {
  beforeEach(() => {
    cleanup();
  });

  test("central value Bad rating", () => {
    render(<MovieRating rating={4} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(/badrating/i);
  });
  test("borderline value Bad rating", () => {
    render(<MovieRating rating={4.9} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(/badrating/i);
  });
  test("central value Neutral rating", () => {
    render(<MovieRating rating={5} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(/neutralrating/i);
  });
  test("borderline value Neutral rating", () => {
    render(<MovieRating rating={5.9} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(/neutralrating/i);
  });
  test("borderline value Great rating", () => {
    render(<MovieRating rating={7} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(/greatrating/i);
  });
  test("central value Great rating", () => {
    render(<MovieRating rating={8} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(/greatrating/i);
  });
});
