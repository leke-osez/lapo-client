import type { ChartConfig } from "@/components/ui/chart";
// import LineChart from "../../../ui/components/line-chart";
import { CustomLine } from "@/ui/components/custom-line-chart";

// const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const chartData = [
  { days: "Mon", income: 65 },
  { days: "Tue", income: 59 },
  { days: "Wed", income: 80 },
  { days: "Thur", income: 81 },
  { days: "Fri", income: 56 },
  { days: "Sat", income: 55 },
  { days: "Sun", income: 40 },
];

const chartConfig = {
  income: {
    label: "income",
    color: "#4DAF01",
  },
} satisfies ChartConfig;

const WeekIncome = () => {
  // const chartData = {
  //   labels: days,
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       fill: false,
  //       borderColor: "#4DAF01",
  //       tension: 0.4,
  //       borderWidth: 1.5,
  //       pointRadius: 0,
  //     },
  //   ],
  // };

  return (
    <div className="bg-white py-2">
      <CustomLine
        chartData={chartData}
        stroke={"#4DAF01"}
        chartConfig={chartConfig}
      />
    </div>
  );
};

export default WeekIncome;
