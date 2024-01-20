
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useCandlestickDataAdaptor } from "../../hooks/adaptor/CandlestickDataAdaptor";




export default function CandlestickChart(props: { width: string, height?: string, timeSlice: string }) {

  const [display, setDisplay] = useState<any[]>([])
  const {elements} = useCandlestickDataAdaptor({timeSlice: props.timeSlice})

  useEffect(
    () => {
      setDisplay(elements)
    }
  ,[elements])


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

    return (
    <Chart
      chartType="CandlestickChart"
      width={props.width || "100%"}
      height={props.height || "100%"}
      data={elements}
      options={options}
    />
  );
}

