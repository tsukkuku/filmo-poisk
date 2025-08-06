import type { ReactNode } from "react";
import style from "./style.module.scss";

interface FilmListProps {
  title: string;
  children: ReactNode;
}

export const FilmList = ({ title, children }: FilmListProps) => {
  return (
    <section className={style.FilmList}>
      <h2 className={style.ListTitle}>{title}</h2>
      {children}
    </section>
  );
};
