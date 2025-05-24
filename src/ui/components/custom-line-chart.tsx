import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {} from "@/components/ui/card";
import {
  // type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Props = {
  stroke: string;
  chartData: any;
  chartConfig: any;
};

export function CustomLine({ stroke, chartData, chartConfig }: Props) {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="days"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis dataKey="income" axisLine={false} tickLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="income"
          type="natural"
          stroke={stroke}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
