import React, { useState } from "react";
import { counter } from "../index.js";
import ReactApexChart from "react-apexcharts";

const ApexChart=()=> {
  console.log(counter);
  const [chartData, setChartData] = useState({
    series: [89],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
  );
}

export default ApexChart;
