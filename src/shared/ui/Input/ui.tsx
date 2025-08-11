import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import style from "./style.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startContent?: ReactNode;
  endContent?: ReactNode;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startContent, endContent, className, error, ...props }, ref) => {
    return (
      <div className={clsx(style.Input, error ? style.Error : "")}>
        {startContent && startContent}
        <input
          ref={ref}
          className={clsx(style.CustomInput, className)}
          {...props}
        />
        {endContent && endContent}
      </div>
    );
  }
);
