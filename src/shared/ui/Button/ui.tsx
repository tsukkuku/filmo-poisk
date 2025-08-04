import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import style from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={clsx(style.Button, className)} {...props}>
      {children}
    </button>
  );
};
