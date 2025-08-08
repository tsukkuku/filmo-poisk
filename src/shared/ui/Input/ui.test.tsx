import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Input } from "./ui";

describe("Input tests", () => {
  afterEach(() => {
    cleanup();
  });
  test("render Input", () => {
    render(<Input placeholder="Input" />);
    const input = screen.getByPlaceholderText(/input/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(/input/i);
    expect(input).toHaveClass(/custominput/i);
  });
  test("render start & end content", () => {
    render(
      <Input
        placeholder="Input"
        startContent={<span data-testid="start">start</span>}
        endContent={<span data-testid="end">end</span>}
      />
    );

    const input = screen.getByPlaceholderText(/input/i);
    const startContent = screen.getByTestId(/start/i);
    const endContent = screen.getByTestId(/end/i);

    expect(input).toBeInTheDocument();
    expect(startContent).toBeInTheDocument();
    expect(endContent).toBeInTheDocument();
  });
  test("error in Input", () => {
    render(<Input placeholder="Input" error="ERROR!" />);
    const input = screen.getByPlaceholderText(/input/i);
    const parentDiv = input.parentElement;
    expect(parentDiv).toHaveClass(/input/i, /error/i);
  });
  test("dont error", () => {
    render(<Input placeholder="Input" />);
    const input = screen.getByPlaceholderText(/input/i);
    const parentDiv = input.parentElement;
    expect(parentDiv).toHaveClass(/input/i);
    expect(parentDiv).not.toHaveClass(/error/i);
  });
  test("add className", () => {
    render(<Input placeholder="Input" className="newClass" />);
    const input = screen.getByPlaceholderText(/input/i);
    expect(input).toHaveClass(/custominput/i, /newclass/i);
  });
});
