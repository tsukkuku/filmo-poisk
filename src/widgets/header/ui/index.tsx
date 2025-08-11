import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui";
import { FiBookmark } from "react-icons/fi";
import { SwitchButton } from "@/features/switch-theme";
import { Nav } from "./nav";

import { AuthModal } from "@/features/auth";
import { useModal } from "@/shared/lib";
import { useAuth } from "../lib";
import { Profile } from "./profile";

import style from "./style.module.scss";

export const Header = () => {
  const { isAuth } = useAuth();
  const { open } = useModal();
  const navigate = useNavigate();

  const redirect = () => {
    if (!isAuth) {
      open();
    } else {
      navigate("/favorites");
    }
  };

  return (
    <header className={style.Header}>
      <div className={style.Navigation__Menu}>
        <Link to={"/"} className={style.Logo}>
          FilmoPoisk
        </Link>
        <Nav />
      </div>
      <div className={style.Login}>
        <div className={style.HeaderIcon}>
          <SwitchButton />
        </div>
        <div className={style.HeaderIcon}>
          <FiBookmark size={20} onClick={redirect} />
        </div>
        {isAuth ? <Profile /> : <Button onClick={open}>Войти</Button>}
        <AuthModal />
      </div>
    </header>
  );
};
