export interface LineChartElement{
    from:number, 
    val:number
}

export interface CandleStickElement {
    from: number, //시작 타임스탬프
    start: number, // 시작 값
    end: number, //종료 값
    min: number, //최솟값
    max: number //최댓값  
}

export interface Post {
    timestamp: number,
    level: number,
    content: string
}