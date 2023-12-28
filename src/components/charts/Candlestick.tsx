
import React from "react";
import { Chart } from "react-google-charts";

interface CandleStickProps {
  /**
 * Line chart에 들어갈 데이터입니다.
 * 들어갈 데이터는 다음과 같습니다.
 * [날짜:문자열, 기간 최솟값:숫자, 시작값:숫자, 종료값:숫자, 기간 최댓값:숫자][]
 */
  elements: [string, number, number, number, number][];
  width?: string;
  height?: string;
}


export default function CandlestickChart(props: CandleStickProps) {

  const options = {
    legend: "none",
    bar: { groupWidth: "90%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#3e66e7" }, // red
      risingColor: { strokeWidth: 0, fill: "#e17645" }, // green
    },
    outerWidth: props.width || "100%",
    outerHeight: props.height || "100%",
    chartArea: { width: "90%", height: "90%" }
  };

  let data: any = [
    ["Date", "min", "start", "end", "max"],
  ];


  props.elements.map((e) => {
    var temp = [...e];
    data.push(temp);
  })

  return (
    <Chart
      chartType="CandlestickChart"
      width={props.width || "100%"}
      height={props.height || "100%"}
      data={data}
      options={options}
    />
  );
}