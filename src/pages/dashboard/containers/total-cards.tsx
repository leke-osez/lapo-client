import ArrowTopRightIcon from "../../../assets/comps/arrow-top-right";
import WarningIcon from "../../../assets/comps/warning-icon";
import WidgetCard from "../../../ui/containers/widget-card";
import { cn } from "../../../utils/namespaces/style";

type Props = {
  icon: React.ReactNode;
  title: string;
  total: number | string;
  percentChange: number;
  duration: "month" | "week" | "day" | "year";
  status?: "pending" | "completed";
};

const durationTitle = {
  month: "this month",
  week: "this week",
  day: "vs yesterday",
  year: "this year",
};

const TotalCards = ({
  icon,
  title,
  total,
  percentChange,
  duration,
  status,
}: Props) => {
  return (
    <WidgetCard
      className="flex flex-col gap-2 "
      containerClass="w-full max-w-[290px]"
    >
      {icon}
      <p className="capitalize text-black opacity-56 font-medium">{title}</p>
      <section className="flex items-center gap-2 justify-between mt-1">
        <p className="text-2xl font-bold">{total.toLocaleString()}</p>

        {status !== "pending" && (
          <div className="flex gap-1 items-center text-xs">
            <div
              className={cn(
                `flex items-center gap-1 text-xs p-1 rounded-[4px]`,
                percentChange > 0 && "text-gains bg-gains/10",
                percentChange < 0 && "text-loss bg-loss/10",
                percentChange === 0 && "text-neutral bg-loss/10"
              )}
            >
              {percentChange > 0 ? (
                <ArrowTopRightIcon />
              ) : (
                <ArrowTopRightIcon className="rotate-90" />
              )}
              <p>{`${percentChange}%`}</p>
            </div>
            <p className="text-black/56">{durationTitle[duration]}</p>
          </div>
        )}

        {status === "pending" && (
          <div className="flex items-center gap-1 text-warning">
            <WarningIcon />
            <p className="text-sm text-input-icon">{`Requires attention`}</p>
          </div>
        )}
      </section>
    </WidgetCard>
  );
};

export default TotalCards;
