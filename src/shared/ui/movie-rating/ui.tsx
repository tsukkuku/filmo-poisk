import { BAD_RATING, NEUTRAL_RATING } from "@/shared/constants";
import clsx from "clsx";
import style from "./style.module.scss";

interface MovieRatingProps {
  rating: number;
  className?: string;
}

export const MovieRating = ({ className, rating }: MovieRatingProps) => {
  const checkRating = (rating: number) => {
    if (rating <= BAD_RATING) {
      return style.BadRating;
    } else if (rating <= NEUTRAL_RATING) {
      return style.NeutralRating;
    } else {
      return style.GreatRating;
    }
  };
  return (
    <div className={clsx(className, checkRating(rating))} data-testid="rating">
      {rating.toFixed(1)}
    </div>
  );
};
