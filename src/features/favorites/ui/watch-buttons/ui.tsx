import { Link } from "react-router-dom";
import { SiKinopoisk } from "react-icons/si";
import style from "./style.module.scss";

interface WatchButtonProps {
  url: string;
  id: string;
}

export const WatchButtons = ({ id, url }: WatchButtonProps) => {
  return (
    <div className={style.Trailer__Container}>
      <Link to={url} target="_blank" className={style.WatchButton}>
        Смотреть
      </Link>
      <Link
        to={`https://widgets.kinopoisk.ru/discovery/film/${id}?onlyPlayer=1&autoplay=1`}
        target="_blank"
        className={style.WatchButton}
      >
        Трейлер
        <SiKinopoisk className={style.Kinopoisk__Logo} />
      </Link>
    </div>
  );
};
