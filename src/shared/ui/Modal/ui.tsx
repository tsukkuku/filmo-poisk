import { type MouseEvent, type ReactNode } from "react";
import style from "./style.module.scss";
import clsx from "clsx";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={clsx(style.Modal, isOpen ? style.active : "")}
      onClick={onClose}
    >
      {isOpen && (
        <div
          className={style.ModalContent}
          onClick={(e: MouseEvent) => e.stopPropagation()}
        >
          <div className={style.ModalHeader}>{title}</div>
          <div className={style.ModalBody}>{children}</div>
        </div>
      )}
    </div>
  );
};
