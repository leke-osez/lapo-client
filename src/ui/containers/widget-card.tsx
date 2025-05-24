import type { ReactNode } from "react";
import { cn } from "../../utils/namespaces/style";

type Props = {
  children: React.ReactNode;
  title?: ReactNode;
  className?: string;
  containerClass?: string;
};

const WidgetCard = ({ children, title, className, containerClass }: Props) => {
  return (
    <div
      className={cn(
        `border border-widget-border bg-foreground p-4 rounded-[10px] flex flex-col gap-5 w-full`,
        containerClass
      )}
    >
      {title && typeof title === "string" ? (
        <h2 className="text-base font-medium">{title}</h2>
      ) : (
        title
      )}
      <div className={cn(className)}>{children}</div>
    </div>
  );
};

export default WidgetCard;
