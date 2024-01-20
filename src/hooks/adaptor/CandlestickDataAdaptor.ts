import { useCallback, useEffect, useState } from "react"
import { GetCandlestickChartData } from "../../services/chart"
import { useUserAccessToken } from "../../stores/clientState"

export const useCandlestickDataAdaptor = function(props:{timeSlice:string}){
    const {accessToken} = useUserAccessToken()
    const [elements, setElements] = useState<[(string)[], ...(string|number)[][]]|never[]>([])

    useEffect(() =>{
        GetCandlestickChartData(accessToken, props.timeSlice).then(
        (res) => {
            console.log(res);
            const elements = res.map((value) => {
                return [new Date(value.from * 1000).toDateString(), 
              value.min,
              value.start,
              value.end,
              value.max]
            });

        setElements([["Date","min","start","end","max"], ...elements])
        })
    }
    ,[props.timeSlice])

    return {elements}
}