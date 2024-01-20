import { useCallback, useEffect, useState } from "react"
import { useUserAccessToken } from "../../stores/clientState"
import { GetAverageData } from "@src/services/chart"

export const useAverageDataAdaptor = function (props: { timeSlice: string }) {
    const { accessToken } = useUserAccessToken()
    const [elements, setElements] = useState<[string[], ...(string| number)[][]]|never[]>([])
    const [isLoading, setLoadingStatus] = useState<boolean>(false)

    useEffect(() => {
        setLoadingStatus(true);
        GetAverageData(accessToken, props.timeSlice).then(
            (res) => {
                console.log(res);
                const elements = res.map((value) => {
                    return [new Date(value.from * 1000).toDateString(),
                        Number(value.val)]
                });
                setElements([["Date", "Average"], ...elements])
                setLoadingStatus(false)
            })
    }
        , [props.timeSlice])

    return {elements, isLoading}
}


