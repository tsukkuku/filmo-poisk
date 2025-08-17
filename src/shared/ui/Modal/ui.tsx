import { type MouseEvent, type ReactNode } from "react";
import style from "./style.module.scss";
import clsx from "clsx";
import { useEscape } from "./lib";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeIcon?: ReactNode;
}

export const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  closeIcon,
}: ModalProps) => {
  useEscape(isOpen);

  return (
    <div
      data-testid="modal"
      className={clsx(style.Modal, isOpen ? style.active : "")}
      onClick={onClose}
    >
      {isOpen && (
        <div
          className={style.ModalContent}
          onClick={(e: MouseEvent) => e.stopPropagation()}
        >
          <div className={style.ModalHeader}>{title}</div>
          {closeIcon && (
            <div className={style.CloseButton} onClick={onClose}>
              {closeIcon}
            </div>
          )}
          <div className={style.ModalBody}>{children}</div>
        </div>
      )}
    </div>
  );
};
