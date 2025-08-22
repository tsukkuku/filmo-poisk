import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui";
import { FiBookmark } from "react-icons/fi";
import { SwitchButton } from "@/features/switch-theme";
import { Nav } from "./nav";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { AuthModal } from "@/features/auth";
import { useAuth, useModal } from "@/shared/lib";
import { Profile } from "./profile";
import { MobileMenu } from "./mobile-menu";

import style from "./style.module.scss";

export const Header = () => {
  const { isAuth } = useAuth();
  const { open } = useModal();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const redirect = () => {
    if (!isAuth) {
      open();
    } else {
      navigate("/filmo-poisk/favorites");
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={style.Header}>
      <div className={style.Navigation__Menu}>
        <Link to={"/filmo-poisk"} className={style.Logo}>
          FilmoPoisk
        </Link>
        <div className={style.DesktopNav}>
          <Nav />
        </div>
      </div>
      <div className={style.Login}>
        <div className={style.Icons}>
          <SwitchButton />
          <FiBookmark
            size={20}
            onClick={redirect}
            className={style.HeaderIcon}
          />
          <Button className={style.MenuToggle} onClick={toggleMenu}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </Button>
        </div>
        <div className={style.DesktopAuth}>
          {isAuth ? <Profile /> : <Button onClick={open}>Войти</Button>}
        </div>
        <AuthModal />
      </div>

      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
};
