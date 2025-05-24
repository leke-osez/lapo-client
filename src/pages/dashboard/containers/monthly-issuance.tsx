import type { ChartConfig } from "@/components/ui/chart";
import { StackedBarChart } from "@/ui/components/stacked-bar-chart";
// import StackedBarChart from "../../../ui/components/stacked-bar-chart";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const chartData = [
  { month: "Jan", personalized: 20, instant: 20 },
  { month: "Feb", personalized: 30, instant: 30 },
  { month: "Mar", personalized: 40, instant: 40 },
  { month: "Apr", personalized: 50, instant: 50 },
  { month: "May", personalized: 50, instant: 10 },
  { month: "Jun", personalized: 70, instant: 20 },
  { month: "Jul", personalized: 30, instant: 9 },
  { month: "Aug", personalized: 60, instant: 10 },
  { month: "Sep", personalized: 50, instant: 12 },
  { month: "Oct", personalized: 40, instant: 15 },
  { month: "Nov", personalized: 30, instant: 30 },
  { month: "Dec", personalized: 60, instant: 40 },
];

const chartConfig = {
  personalized: {
    label: "Personalized",
    color: "#014DAF",
  },
  instant: {
    label: "Instant",
    color: "#CCE2FF",
  },
} satisfies ChartConfig;

const barsData = [
  { dataKey: "personalized", color: "#014DAF" },
  { dataKey: "instant", color: "#CCE2FF" },
];

const MonthlyIssuance = () => {
  const labels = months;
  // const chartData = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "Instant",
  //       data: [20, 30, 40, 50, 10, 20, 9, 10, 12, 20, 12, 15, 30, 40,]
  //       backgroundColor: "#014DAF",
  //       borderRadius: {
  //         topLeft: 8,
  //         topRight: 8,
  //       },
  //     },
  //     {
  //       label: "Personalized",
  //       data: [20, 30, 40, 50, 50, 70, 30, 60, 50, 82, 78, 80, 76, 79],
  //       backgroundColor: "#CCE2FF",
  //       borderRadius: 8,
  //     },
  //   ],
  // };
  return (
    <div className="bg-white">
      <StackedBarChart
        chartData={chartData}
        chartConfig={chartConfig}
        barsData={barsData}
        xAxis={{ dataKey: "month" }}
        yAxis={{ dataKey: "total" }}
      />
    </div>
  );
};

export default MonthlyIssuance;
