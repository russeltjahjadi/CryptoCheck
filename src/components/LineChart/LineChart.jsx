import React from "react";
import Chart from "react-google-charts";
import "./LineChart.css";
const LineChart = ({ historicalData }) => {
  if (!historicalData || historicalData.length === 0) {
    return <div className="chart-loading">📊 Loading chart data...</div>;
  }

  const data = [[{ type: "date", label: "Date" }, "Price (USD)"]];

  historicalData.forEach((item) => {
    data.push([new Date(item[0]), item[1]]);
  });

  const options = {
    title: "Price History",
    titleTextStyle: {
      color: "#ffffff",
      fontSize: 18,
      bold: true,
      fontName: "Outfit",
    },
    legend: { position: "none" },
    hAxis: {
      format: "MMM dd",
      textStyle: {
        color: "#ddd",
        fontName: "Outfit",
        fontSize: 12,
      },
      gridlines: { color: "#3c3c3c" },
    },
    vAxis: {
      title: "Price",
      titleTextStyle: {
        color: "#ddd",
        fontSize: 13,
        fontName: "Outfit",
      },
      textStyle: {
        color: "#ddd",
        fontName: "Outfit",
        fontSize: 12,
      },
      gridlines: { color: "#3c3c3c" },
      format: "$#,###",
    },
    backgroundColor: "transparent",
    series: {
      0: {
        color: "#00d4ff", // Vibrant cyan that pops
        lineWidth: 3,
      },
    },
    pointSize: 0,
    animation: {
      duration: 1000,
      easing: "out",
    },
    curveType: "function", // Smooth curves instead of sharp lines
    crosshair: { color: "#00d4ff", trigger: "both" },
  };

  return (
    <div className="chart-container">
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default LineChart;
