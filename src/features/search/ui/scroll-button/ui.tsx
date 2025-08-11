import { Button } from "@/shared/ui";

import { IoIosArrowUp } from "react-icons/io";
import style from "./style.module.scss";

interface ScrollButtonProps {
  inView: boolean;
}

export const ScrollButton = ({ inView }: ScrollButtonProps) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={goToTop}
      className={!inView ? style.GoTop__Button : style.Button__NotActive}
    >
      <IoIosArrowUp size={20} />
    </Button>
  );
};
