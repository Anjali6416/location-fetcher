import React from "react";
import ReactECharts from "echarts-for-react";
import Col from "react-bootstrap/Col";

const EChartComponent = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
  };

  return (
    <div style={{ boxShadow:"0 0 10px black", width: '700px', borderRadius:'10px'}}>
      <div>
        <h1 style={{marginTop:"20px",textAlign:"center"}}>Graph</h1>
      </div>
      <ReactECharts option={option} />;
    </div>
  );
};

export default EChartComponent;
