import React from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  // Guard check: ensure historicalData is a non-empty array
  if (!historicalData || historicalData.length === 0) {
    return <div className="chart-loading">Loading chart...</div>;
  }

  // 1. Explicitly define column types in the header
  const data = [[{ type: "date", label: "Date" }, "Prices"]];

  // 2. Map over the price array directly
  historicalData.forEach((item) => {
    data.push([new Date(item[0]), item[1]]);
  });

  const options = {
    hAxis: {
      format: "MMM dd",
    },
    vAxis: {
      title: "Price",
    },
    legend: { position: "none" },
  };

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default LineChart;
