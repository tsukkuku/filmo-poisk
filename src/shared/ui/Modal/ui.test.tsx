import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { Modal } from "./ui";
import { ModalProvider } from "@/shared/lib";

const mockFunc = vi.fn();

describe("Modal tests", () => {
  afterEach(() => {
    cleanup();
  });
  test("render Modal", () => {
    render(
      <ModalProvider>
        <Modal isOpen title="Title" onClose={mockFunc}>
          Content
        </Modal>
      </ModalProvider>
    );
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass(/modal/i);
    expect(modal).toHaveTextContent(/content/i);
  });
  test("not render Modal", () => {
    render(
      <ModalProvider>
        <Modal isOpen title="Title" onClose={mockFunc}>
          Content
        </Modal>
      </ModalProvider>
    );
    const modal = screen.getByTestId("modal");
    expect(modal).not.toHaveClass(/modalcontent/i);
  });
  test("close Modal", () => {
    render(
      <ModalProvider>
        <Modal isOpen title="Title" onClose={mockFunc}>
          Content
        </Modal>
      </ModalProvider>
    );
    const modal = screen.getByTestId("modal");
    fireEvent.click(modal);
    expect(mockFunc).toHaveBeenCalled();
    expect(modal).not.toHaveClass(/modalcontent/i);
  });
  test("click on content in Modal", () => {
    render(
      <ModalProvider>
        <Modal isOpen title="Title" onClose={mockFunc}>
          Content
        </Modal>
      </ModalProvider>
    );
    const modal = screen.getByText(/content/i);
    fireEvent.click(modal);
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(/content/i);
    expect(modal).toHaveClass(/modalbody/i);
  });
  test("render Title in Modal", () => {
    render(
      <ModalProvider>
        <Modal isOpen title="Title" onClose={mockFunc}>
          Content
        </Modal>
      </ModalProvider>
    );
    const modal = screen.getByText(/title/i);
    expect(modal).toHaveTextContent(/title/i);
    expect(modal).toHaveClass(/modalheader/i);
  });
});
