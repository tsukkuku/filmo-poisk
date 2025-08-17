import { useModal } from "@/shared/lib";
import { useEffect } from "react";

export const useEscape = (isOpen: boolean) => {
  const { close } = useModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);
};
