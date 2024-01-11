
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import urlJoin from "url-join";
import { API_BASE_URL } from "../../constants";
import { useUserAccessToken } from "../../stores/clientState";

interface CandleStickElement {
  from: number, //시작 타임스탬프
  start: number, // 시작 값
  end: number, //종료 값
  min: number, //최솟값
  max: number //최댓값

}

export default function CandlestickChart(props: { width: string, height?: string, timeSlice: string }) {

  const { accessToken } = useUserAccessToken()
  const [display, setDisplay] = useState<any[]>([])

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

  let elements: [string, number, number, number, number][];

  useEffect(() => {
    axios.get<{elements:CandleStickElement[]}>(
      urlJoin(API_BASE_URL, "/chart/candlestick"), {

      params: {
        timeSlice: props.timeSlice
      },

      headers: {
        "accessToken": accessToken,
      },
    })
    .then(
      (res) => {
        console.log(res);
        elements = res.data.elements.map((value) => {
            return [new Date(value.from * 1000).toDateString(), 
          value.min,
          value.start,
          value.end,
          value.max]
        });
        setDisplay([["Date", "min", "start", "end", "max"], ...elements]);
      })
    .catch(
      (e) =>{console.error(e)}
    )
  }, [props.timeSlice])

  return (
    <Chart
      chartType="CandlestickChart"
      width={props.width || "100%"}
      height={props.height || "100%"}
      data={display}
      options={options}
    />
  );
}