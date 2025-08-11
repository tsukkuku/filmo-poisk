import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const Nav = () => {
  return (
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
          <Link to={"/search"}>Поиск</Link>
        </li>
      </ul>
    </div>
  );
};
