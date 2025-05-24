// import DougnutChart from "../../../ui/components/pie-chart";

// const CardStatusDistribution = () => {
//   const chartData = {
//     labels: ["active", "expired", "inactive", "blocked", "lost"],

//     datasets: [
//       {
//         label: "Total Cards",
//         data: [500, 100, 40, 30, 20],
//         backgroundColor: [
//           "#01A4AF",
//           "#FFBA24",
//           "#014DAF",
//           "#8020E7",
//           "#FF4457",
//         ],
//         borderWidth: 1,
//         borderRadius: 3000,
//         offset: 5,
//         radius: "70%",
//         innerRadius: 150,
//         outerRadius: 180,
//         borderHeight: 3,
//         cutout: 250,
//         borderDashOffset: 4,
//       },
//     ],
//   };
//   return (
//     <div className="-mt-20">
//       <DougnutChart chartData={chartData} />
//     </div>
//   );
// };

// import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   type ChartConfig,
//   ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import ChartPie from "../../../ui/components/pie-chart";
// const chartData = [
//   {
//     month: "january",
//     active: 500,
//     expired: 100,
//     inactive: 40,
//     blocked: 30,
//     lost: 20,
//   },
// ];

const chartData = [
  { status: "active", total: 800 },
  { status: "expired", total: 300 },
  { status: "inactive", total: 200 },
  { status: "blocked", total: 100 },
  { status: "lost", total: 100 },
];
const colors = ["#01A4AF", "#FFBA24", "#014DAF", "#8020E7", "#FF4457"];

const chartConfig = {
  total: {
    label: "Total",
  },
  active: {
    label: "active",
    color: "#01A4AF",
  },
  expired: {
    label: "expired",
    color: "#FFBA24",
  },
  inactive: {
    label: "inactive",
    color: "#014DAF",
  },
  blocked: {
    label: "blocked",
    color: "#8020E7",
  },
  lost: {
    label: "expired",
    color: "#FF4457",
  },
} satisfies ChartConfig;

function CardStatusDistribution() {
  // const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <ChartPie chartData={chartData} colors={colors} chartConfig={chartConfig} />
    // <Card className="flex flex-col">
    //   {/* <CardHeader className="items-center pb-0">
    //     <CardTitle>Radial Chart - Stacked</CardTitle>
    //     <CardDescription>January - June 2024</CardDescription>
    //   </CardHeader> */}
    //   <CardContent className="flex flex-1 items-center pb-0">
    //     <ChartContainer
    //       config={chartConfig}
    //       className="mx-auto aspect-square w-full max-w-[250px]"
    //     >
    //       <RadialBarChart
    //         data={chartData}
    //         endAngle={360}
    //         innerRadius={100}
    //         outerRadius={130}
    //       >
    //         <ChartTooltip
    //           cursor={false}
    //           content={<ChartTooltipContent hideLabel />}
    //         />
    //         <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
    //           <Label
    //             content={({ viewBox }) => {
    //               if (viewBox && "cx" in viewBox && "cy" in viewBox) {
    //                 return (
    //                   <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
    //                     <tspan
    //                       x={viewBox.cx}
    //                       y={(viewBox.cy || 0) + 4}
    //                       className="fill-muted-pry-text"
    //                     >
    //                       Total Cards
    //                     </tspan>
    //                     <tspan
    //                       x={viewBox.cx}
    //                       y={(viewBox.cy || 0) - 16}
    //                       className="fill-pry-text text-2xl font-bold"
    //                     >
    //                       {/* {totalVisitors.toLocaleString()} */}
    //                       2,450
    //                     </tspan>
    //                   </text>
    //                 );
    //               }
    //             }}
    //           />
    //         </PolarRadiusAxis>

    //         <RadialBar
    //           dataKey="active"
    //           stackId="a"
    //           cornerRadius={8}
    //           fill={chartConfig.active.color}
    //           className="stroke-transparent stroke-2"
    //         />
    //         <RadialBar
    //           dataKey="expired"
    //           fill={chartConfig.expired.color}
    //           stackId="a"
    //           cornerRadius={8}
    //           className="stroke-transparent stroke-2"
    //         />
    //         <RadialBar
    //           dataKey="inactive"
    //           fill={chartConfig.inactive.color}
    //           stackId="a"
    //           cornerRadius={8}
    //           className="stroke-transparent stroke-2"
    //         />
    //         <RadialBar
    //           dataKey="blocked"
    //           fill={chartConfig.blocked.color}
    //           stackId="a"
    //           cornerRadius={8}
    //           className="stroke-transparent stroke-2"
    //         />

    //         <RadialBar
    //           dataKey={"lost"}
    //           fill={chartConfig.lost.color}
    //           stackId="a"
    //           cornerRadius={8}
    //           className="stroke-transparent stroke-2"
    //         />
    //       </RadialBarChart>
    //       <ChartLegend
    //         content={<ChartLegendContent />}
    //         className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
    //       />
    //     </ChartContainer>
    //   </CardContent>

    //   {/* <CardFooter className="flex-col gap-2 text-sm">
    //     <div className="flex items-center gap-2 font-medium leading-none">
    //       Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //     </div>
    //     <div className="leading-none text-muted-foreground">
    //       Showing total visitors for the last 6 months
    //     </div>
    //   </CardFooter> */}
    // </Card>
  );
}

export default CardStatusDistribution;
