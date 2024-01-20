
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useUserAccessToken } from "@src/stores/clientState";
import { useAverageDataAdaptor } from "@src/hooks/adaptor/AverageDataAdaptor";


export default function LineChart(props: { width: string, height?: string, timeSlice: string}) {

  const {accessToken} = useUserAccessToken();
  const [display, setDisplay] = useState<any[]>([])
  const {elements} = useAverageDataAdaptor({timeSlice: props.timeSlice})
  
  useEffect(
    () => {
      setDisplay(elements)
    }
  ,[elements])


  const options = {
    curveType: "function",
    legend: "none",
    outerWidth: props.width,
    outerHeight: props.height,
    chartArea: { width: "85%", height: "90%" }
  };

  return (

    <Chart
      chartType="LineChart"
      width={props.width}
      height={props.height || "100%"}
      data={display}
      options={options}
    />
  );
}

