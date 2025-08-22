import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/shared/lib";
import { googleLogout, logout } from "@/features/auth";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

interface DropDownProps {
  isOpen: boolean;
  onClose: () => void;
  isYandex: boolean;
}

export const DropDown = ({ isOpen, onClose, isYandex }: DropDownProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (ref && !ref.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClose);
    }

    return () => document.removeEventListener("mousedown", handleClose);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div ref={ref} className={style.DropDown}>
          <div className={style.DropDown__Content}>
            <Link
              className={style.DropDown__Button}
              to={"/filmo-poisk/history"}
            >
              История
            </Link>
            <div
              className={style.DropDown__Button}
              onClick={() => dispatch(isYandex ? logout() : googleLogout())}
            >
              Выйти
            </div>
          </div>
        </div>
      )}
    </>
  );
};
