import { useState } from "react";
import { Button } from "@/shared/ui";
import { IoIosArrowDown } from "react-icons/io";
import type { MovieFacts } from "@/pages/movie-page/api";
import style from "./style.module.scss";

interface FactsProps {
  isMovie?: boolean;
  movie?: MovieFacts;
  person?: string[];
}

export const FactsList = ({ isMovie = true, movie, person }: FactsProps) => {
  const [show, setShow] = useState<number>(3);

  const handleShow = () => {
    setShow((prev) => prev + 10);
  };

  const arrayCheck = isMovie ? movie?.items : person;

  return (
    <>
      {arrayCheck && arrayCheck?.length > 0 && (
        <div className={style.MovieFacts}>
          <h4 className={style.SectionTitle}>Интересные факты</h4>
          {isMovie && (
            <div className={style.WarningMessage}>
              Осторожно! Список фактов может содержать спойлеры
            </div>
          )}
          <ul
            className={style.FactList}
            dangerouslySetInnerHTML={{
              __html: !isMovie
                ? (person || [])
                    ?.map((fact) => `<li class="${style.Fact}">${fact}</li>`)
                    .slice(0, show)
                    .join("")
                : (movie?.items || [])
                    .filter((fact) => fact.type === "FACT")
                    .slice(0, show)
                    .map(
                      (fact) =>
                        `<li class="${style.Fact}">${
                          fact.spoiler
                            ? `<span class="${style.Spoiler}">Спойлер!</span>`
                            : ""
                        } ${fact.text}</li>`
                    )
                    .join(""),
            }}
          ></ul>
          {arrayCheck.length > show && (
            <Button onClick={handleShow} className={style.LoadMore__Button}>
              Показать еще
              <IoIosArrowDown />
            </Button>
          )}
        </div>
      )}
    </>
  );
};
