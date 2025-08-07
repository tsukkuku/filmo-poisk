import { clsx } from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";
import style from "./style.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startContent?: ReactNode;
  endContent?: ReactNode;
  error?: string;
}

export const Input = ({
  startContent,
  endContent,
  className,
  error,
  ...props
}: InputProps) => {
  return (
    <div className={clsx(style.Input, error ? style.Error : "")}>
      {startContent && startContent}
      <input className={clsx(style.CustomInput, className)} {...props} />
      {endContent && endContent}
    </div>
  );
};
