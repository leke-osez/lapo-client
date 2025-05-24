import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

interface PieChartProps {
  chartData: { status: string; total: number }[];
  colors?: Array<string>;
  chartConfig?: any;
}

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const ChartPie: React.FC<PieChartProps> = ({
  chartData,
  colors,
  chartConfig,
}) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px] w-full"
    >
      <PieChart width={400} height={300}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Pie
          data={chartData}
          dataKey="total"
          nameKey="status"
          innerRadius={95}
          strokeWidth={5}
          cornerRadius={3}
          paddingAngle={2}
          legendType="circle"
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors ? colors[index % colors.length] : "black"}
            />
          ))}

          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total Cards
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-pry-text text-3xl font-bold"
                    >
                      {"2,450"}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={
            <ChartLegendContent nameKey="status" className="rounded-full" />
          }
          className="-translate-y-2 w-full flex-wrap gap-4 [&>*]:justify-center [&>*]:rounded-full"
        />
      </PieChart>
    </ChartContainer>
  );
};

export default ChartPie;
