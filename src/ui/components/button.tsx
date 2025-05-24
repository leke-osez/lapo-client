import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { buttonVariants } from "../variants/button";
import { cn } from "../../utils/namespaces/style";

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            className: `${className} cursor-pointer`,
          })
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
