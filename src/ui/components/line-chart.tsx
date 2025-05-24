import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <div>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
