import { forwardRef, type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import style from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SwiperButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(style.SwiperButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
