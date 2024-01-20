import axios from "axios";
import urlJoin from "url-join";
import { API_BASE_URL } from "../constants";
import { useUserAccessToken } from "../stores/clientState";
import { CandleStickElement, LineChartElement } from "../@types/DTO";


export const GetAverageData = async function(accessToken: string, timeSlice:string):Promise<LineChartElement[]> {

    const res = await axios.get<{elements:LineChartElement[]}>(
    urlJoin(API_BASE_URL, "/chart/line/ave/"), {
    params: {
      timeSlice:timeSlice
    },
    headers: {
      "accessToken": accessToken,
    },
    withCredentials: true
  })

  return res.data.elements;

}

export const GetCandlestickChartData = async function (accessToken:string, timeSlice:string):Promise<CandleStickElement[]> {

    const res = await axios.get<{elements:CandleStickElement[]}>(
        urlJoin(API_BASE_URL, "/chart/candlestick"), {
        params: {
          timeSlice: timeSlice
        },
        headers: {
          "accessToken": accessToken,
        }});

    return res.data.elements;
}