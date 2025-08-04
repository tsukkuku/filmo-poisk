import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./ui";

const mockFunc = vi.fn();

describe("Button tests", () => {
  afterEach(() => {
    cleanup();
  });
  test("Render Button", () => {
    render(<Button>Click!</Button>);
    const btn = screen.getByText(/click!/i);
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(/button/i);
  });
  test("Button onClick", () => {
    render(<Button onClick={mockFunc}>Click!</Button>);
    const btn = screen.getByText(/click!/i);
    fireEvent.click(btn);
    expect(mockFunc).toBeCalled();
  });
  test("additional className", () => {
    render(<Button className="testClass">Click!</Button>);
    const btn = screen.getByText(/click!/i);
    expect(btn).toHaveClass(/button/i, /testclass/i);
  });
});
