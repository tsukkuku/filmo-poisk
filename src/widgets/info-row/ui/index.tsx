import type { ReactNode } from "react";
import style from "./style.module.scss";

interface InfoRowProps {
  title: string;
  children: ReactNode;
  variant?: "row" | "column";
}

export const InfoRow = ({ variant = "row", title, children }: InfoRowProps) => {
  return (
    <div className={style.Row}>
      <div className={style.Title}>{title}</div>
      <div
        className={variant === "row" ? style.RowContent : style.ColumnContent}
      >
        {children}
      </div>
    </div>
  );
};
