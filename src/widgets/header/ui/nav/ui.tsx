import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const Nav = () => {
  return (
    <div className={style.Navigation__List}>
      <ul>
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/films"}>Подборка</Link>
        </li>
        <li>
          <Link to={"/search"}>Поиск</Link>
        </li>
      </ul>
    </div>
  );
};
