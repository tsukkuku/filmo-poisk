import { useAuth, useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { Nav } from "../nav";
import { Profile } from "../profile";
import clsx from "clsx";
import style from "./style.module.scss";

interface MobileMenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

export const MobileMenu = ({ menuOpen, closeMenu }: MobileMenuProps) => {
  const { isAuth } = useAuth();
  const { open } = useModal();

  return (
    <div
      className={clsx(style.MobileMenu, menuOpen ? style.Open : "")}
      onClick={closeMenu}
    >
      <div
        className={style.MobileMenuContent}
        onClick={(e) => e.stopPropagation()}
      >
        <Nav />
        <div className={style.MobileAuth}>
          {isAuth ? <Profile /> : <Button onClick={open}>Войти</Button>}
        </div>
        <Button onClick={closeMenu}>Закрыть</Button>
      </div>
    </div>
  );
};
