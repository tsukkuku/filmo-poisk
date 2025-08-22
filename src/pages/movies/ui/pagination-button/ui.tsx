import { Button } from "@/shared/ui";
import clsx from "clsx";
import style from "./style.module.scss";

interface PaginationButtonProps {
  page: number;
  changePage: (item: number) => void;
}

export const PaginationButton = ({
  page,
  changePage,
}: PaginationButtonProps) => {
  return (
    <div className={style.PageButton}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Button
          key={index}
          onClick={() => changePage(item)}
          className={clsx(
            style.Pagination,
            page === item ? style.Active : style
          )}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
