import { Link } from "react-router-dom";

import { Button } from "@/shared/ui";
import { SwitchButton } from "@/features/switch-theme";
import { FiBookmark } from "react-icons/fi";

import style from "./style.module.scss";

export const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Navigation__Menu}>
        <Link to={"/"} className={style.Logo}>
          FilmoPoisk
        </Link>
        <div className={style.Navigation__List}>
          <ul>
            <li>
              <Link to={"/"}>Подборка</Link>
            </li>
            <li>
              <Link to={"/films"}>Фильмы</Link>
            </li>
            <li>
              <Link to={"/series"}>Сериалы</Link>
            </li>
            <li>
              <Link to={"/cartoons"}>Мультфильмы</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.Login}>
        <div className={style.HeaderIcon}>
          <SwitchButton />
        </div>
        <div className={style.HeaderIcon}>
          <FiBookmark size={20} />
        </div>
        <Button>Войти</Button>
      </div>
    </header>
  );
};
