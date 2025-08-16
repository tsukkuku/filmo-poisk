import type { ReactNode } from "react";
import style from "./style.module.scss";

interface InfoRowProps {
  title: string;
  children: ReactNode;
}

export const InfoRow = ({ title, children }: InfoRowProps) => {
  return (
    <div className={style.Row}>
      <div className={style.Title}>{title}</div>
      <div className={style.Content}>{children}</div>
    </div>
  );
};
