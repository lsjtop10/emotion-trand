
import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import urlJoin from "url-join";
import { API_BASE_URL } from "../../constants";
import { useUserAccessToken } from "../../stores/clientState";

interface LineChartElement{
  from:number, 
  val:number
}

export default function LineChart(props: { width: string, height?: string, timeSlice: string}) {

  const {accessToken} = useUserAccessToken();
  const [display, setDisplay] = useState<any[]>([])

  const data: any = [
    ["Date", "Average"],
  ];

  const options = {
    curveType: "function",
    legend: "none",
    outerWidth: props.width,
    outerHeight: props.height,
    chartArea: { width: "85%", height: "90%" }
  };
  let elements: [string, number][];

  useEffect(() => {
    axios.get<{elements:LineChartElement[]}>(
      urlJoin(API_BASE_URL, "/chart/line/ave/"), {
      params: {
        timeSlice: props.timeSlice
      },
      headers: {
        "accessToken": accessToken,
      },
      withCredentials: true
    })
    .then(
      (res) => {
        console.log(res);
        elements = res.data.elements.map((value) => {
            return [new Date(value.from * 1000).toDateString(), 
            value.val,]
        });
        setDisplay([["Date", "Average"], ...elements]);
      })
    .catch(
      (e) =>{console.error(e)}
    )
  }, [props.timeSlice])
 



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

