import { forwardRef, memo, useState } from "react";
import { cn } from "../../utils/namespaces/style";
import { EyeClosedIcon } from "@phosphor-icons/react";
import { InputShow } from "../../assets/comps";

export type InputProps = {
  hasError?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onClickRightIcon?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        className,
        type,
        hasError = false,
        rightIcon,
        onClickRightIcon,
        leftIcon,
        ...props
      },
      ref
    ) => {
      const [passState, setPassState] = useState(true);
      // const passRef = useRef(false);

      const handleClickRightIcon = () => {
        if (type === "password") {
          return setPassState(!passState);
        }
        if (onClickRightIcon) {
          onClickRightIcon();
        }
      };
      return (
        <div
          className={cn(
            `flex items-center py-[10px] px-[14px] gap-[8px] bg-white border border-input-border rounded-input w-full max-w-[560px `,
            className
          )}
        >
          {leftIcon && <div className="text-input-icon">{leftIcon}</div>}
          <input
            ref={ref}
            type={type === "password" && passState ? "password" : "text"}
            autoComplete="off"
            className={cn(
              "flex w-full rounded bg-transparent !text-sm ring-0 ring-offset-transparent transition-colors [appearance:textfield] placeholder:opacity-80 hover:bg-secondary/20 focus:border-primary focus:bg-secondary/20 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              "file:border-0 file:bg-transparent file:pt-1 file:text-sm file:font-medium file:text-primary",
              hasError ? "border-error" : "border-border",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div
              onClick={handleClickRightIcon}
              className={cn(
                ` ${
                  onClickRightIcon || (type === "password" && "cursor-pointer")
                } className="text-input-icon"`
              )}
            >
              {type === "password" ? (
                !passState ? (
                  <EyeClosedIcon className="text-input-icon" />
                ) : (
                  <InputShow />
                )
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>
      );
    }
  )
);

Input.displayName = "Input";
