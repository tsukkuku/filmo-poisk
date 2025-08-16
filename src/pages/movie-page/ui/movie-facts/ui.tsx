import { useState } from "react";
import { useGetMovieFactsQuery } from "@/pages/movie-page/api";
import { Button } from "@/shared/ui";
import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.scss";

interface MovieFactsProps {
  id: string;
}

export const MovieFacts = ({ id }: MovieFactsProps) => {
  const [show, setShow] = useState<number>(3);
  const { data: facts, isLoading } = useGetMovieFactsQuery(id);

  const handleShow = () => {
    setShow((prev) => prev + 10);
  };

  if (isLoading) return;
  if (!facts) return <div>Нету фактов или ошибок</div>;

  return (
    <>
      {facts.items.length > 0 && (
        <div className={style.MovieFacts}>
          <h4 className={style.SectionTitle}>Интересные факты</h4>
          <div className={style.WarningMessage}>
            Осторожно! Список фактов может содержать спойлеры
          </div>
          <ul
            className={style.FactList}
            dangerouslySetInnerHTML={{
              __html: facts.items
                .filter((item) => item.type === "FACT")
                .slice(0, show)
                .map(
                  (item) =>
                    `<li class=${style.Fact}>${
                      item.spoiler
                        ? `<span class=${style.Spoiler}>Спойлер!</span>`
                        : ""
                    } ${item.text}</li>`
                )
                .join(""),
            }}
          ></ul>
          {facts.items.length > show && (
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
