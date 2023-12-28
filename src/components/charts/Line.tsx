
import React, { Component } from "react";
import { Chart } from "react-google-charts";

interface LineChartProps {
  
  /**
   * Line chart에 들어갈 데이터입니다.
   * 순서대로 문자열 형태의 시간과, number타입인 데이터가 들어갑니다.
   */

  elements: [string, number][];
  width: string;
  height?: string;
}

export default function LineChart(props: LineChartProps) {
  console.log(props);

  const options = {
    curveType: "function",
    legend: 'none',
    outerWidth:props.width,
    outerHeight:props.height,
    chartArea:{width:"85%", height:"90%"}
  };

  const data:any = [
    ["Date", "Average"],
  ];

  props.elements.map((e) => {
    data.push([...e]);
  })

  return (
    
    <Chart
      chartType="LineChart"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
    />
  );
}

