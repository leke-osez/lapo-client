// import { Bar } from "react-chartjs-2";

// const StackedBarChart = ({ chartData }) => {
//   return (
//     <div>
//       <Bar
//         data={chartData}
//         options={{
//           plugins: {
//             legend: {
//               position: "bottom",
//               labels: {
//                 // color: "blue",
//                 padding: 20,
//                 font: {
//                   size: 10,
//                   weight: "normal",
//                 },
//                 usePointStyle: true,
//                 pointStyle: "",
//                 borderRadius: 30,
//               },
//             },
//           },
//           responsive: true,
//           scales: {
//             x: {
//               stacked: true,
//               grid: {
//                 display: false,
//               },
//               //   ticks: {
//               //     display: false
//               //   },
//               border: {
//                 display: false,
//               },
//             },
//             y: {
//               stacked: true,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default StackedBarChart;

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  type XAxisProps,
  type YAxisProps,
} from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Props = {
  chartData: unknown[];
  chartConfig: ChartConfig;
  barsData: { dataKey: string; color: string }[];
  xAxis: XAxisProps;
  yAxis: YAxisProps;
};

export function StackedBarChart({
  chartData,
  chartConfig,
  barsData,
  xAxis,
}: Props) {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxis.dataKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />

        {barsData.map((bar) => (
          <Bar
            dataKey={bar.dataKey}
            stackId="a"
            fill={bar.color}
            radius={[8, 8, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}
