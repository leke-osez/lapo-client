import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "peer size-4 shrink-0 rounded border border-input-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        primary:
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        bordered:
          "border border-widget-border bg-foreground data-[state=checked]:border-green-950 data-[state=checked]:bg-green-950/10 data-[state=checked]:text-green-950 ",
        outline:
          "border border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-9 px-5",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },
    // compoundVariants: [
    //   { variant: "link", size: "sm", className: "h-auto px-0" },
    //   { variant: "link", size: "md", className: "h-auto px-0" },
    //   { variant: "link", size: "lg", className: "h-auto px-0" },
    // ],
    defaultVariants: {
      variant: "primary",
    },
  }
);
