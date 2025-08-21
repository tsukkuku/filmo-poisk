import {
  useAppDispatch,
  useAppSelector,
  useAuth,
  useModal,
} from "@/shared/lib";
import { addMovie, inFavorite } from "../model";
import { WatchButtons } from "./watch-buttons";
import { Toaster } from "react-hot-toast";
import style from "./style.module.scss";
import { Button } from "@/shared/ui";
import type { MoviePageInfo } from "@/shared/types";

interface FavoriteImageProps {
  id: string;
  movie: MoviePageInfo;
}

export const FavoriteImage = ({ id, movie }: FavoriteImageProps) => {
  const favorite = useAppSelector(inFavorite(parseInt(id)));
  const { isAuth } = useAuth();
  const { open } = useModal();
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (isAuth) {
      dispatch(addMovie(movie));
    } else {
      open();
    }
  };

  return (
    <div className={style.Watch}>
      <div className={style.MoviePoster} onClick={handleAdd}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameOriginal}
          className={style.Poster}
        />
        <div className={style.AddButton}>
          <Button className={style.Text}>
            {isAuth
              ? favorite
                ? "Убрать из избранного"
                : "Добавить в избранное"
              : "Добавить в избранное"}
          </Button>
        </div>
      </div>
      <Toaster
        position="bottom-left"
        reverseOrder
        toastOptions={{
          style: {
            background: "var(--bg-button)",
            color: "var(--button-text)",
            padding: "10px",
            fontSize: "14px",
            fontWeight: "700",
          },
        }}
      />
      <WatchButtons id={id} url={movie.webUrl} />
    </div>
  );
};
