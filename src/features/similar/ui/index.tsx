import { useState } from "react";
import { useSimilarMovies } from "../lib";
import { Button, Modal } from "@/shared/ui";
import { SimilarCard } from "./similar-card";
import { IoClose } from "react-icons/io5";
import style from "./style.module.scss";

export const Similar = () => {
  const [show, setShow] = useState(false);
  const movies = useSimilarMovies();

  return (
    <>
      <Button onClick={() => setShow((prev) => !prev)}>Похожее</Button>
      <Modal
        title="Похожие фильмы"
        isOpen={show}
        onClose={() => setShow(false)}
        closeIcon={<IoClose size={30} />}
      >
        <div className={style.List}>
          {movies.map((movie) => (
            <SimilarCard
              id={movie.kinopoiskId}
              name={movie.nameRu || movie.nameOriginal}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};
