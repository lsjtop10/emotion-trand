import { Box, TextField, Slider, Button, FormControl, InputLabel, MenuItem, Select, Stack, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import styled from "styled-components";
import CandlestickChart from '@src/components/charts/Candlestick';
import LineChart from "@src/components/charts/Line";
import { useUserAccessToken } from '@src/stores/clientState';
import { PostPost } from '@src/services/posts';

const ChartContainer = styled.div`
  aspect-ratio: 16/10;
`


// 선택한 차트의 종류에 따라서 차트 컴포넌트를 교체해 줘야 한다.
// time slice에 따라서 데이터를 새로 요청해야 한다.
// submit 버튼을 누르면 차트가 다시 렌더링 돼야 한다.
// 각각의 차트 종류마다 허용되는 time slice가 다를 수도 있다. ex: candlestick은 1d, 1w, 1y,  line은 1d, 6m, 1y 
// level input box는 범위가 벗어나면 error state로 변경돼야 한다.

export default function ChartPage() {
  const [chartType, setChartType] = React.useState<string>("candle");
  const [timeSlice, setTimeSlice] = React.useState<string>("1d");
  const [levelValue, setLevelValue] = React.useState<number>(0);
  const [memoContent, setMemoContent] = React.useState<string>("");

  const min: number = -1000;
  const max: number = 1000;

  const chartComponents: { [key: string]: React.ElementType } = {
    candle: CandlestickChart,
    line: LineChart,
  };

  const Chart = chartComponents[chartType];

  const handleChartTypeChange = (event: SelectChangeEvent<string>) => {
    const selectedChartType = event.target.value as string;
    setChartType(selectedChartType);
  };

  const handleLevelSliderChange = (event: Event, newValue: number | number[]) => {
    setLevelValue(newValue as number);
  };

  const handleLevelTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    let val = Number(event.target.value);

    if(Number.isNaN(val))
    {
      return;
    }
    
    if(val < min)
    {
      val = min;
    }
    else if(val > max)
    {
      val = max;
    }

    setLevelValue(val)
  }

  const handleSubmitBtnClick = (event: React.MouseEvent) => {
    PostPost({
      content: memoContent,
      level: levelValue,
      timestamp: Date.now(),
    }).catch(
      (e) => {console.error(e)}
    );
    setMemoContent("");
  }

  return (
    <>
      <Stack direction="column" sx={{ width: { xs: "100%", md: "70%" }, height: "100%" }}>

        <ChartContainer>
          {
            <Chart width="100%" height="100%" timeSlice={timeSlice} />
          }
        </ChartContainer>

        <Stack direction="row" spacing={2} sx={{ marginTop: "12px" }}>
          <Box sx={{ minWidth: 120, flexBasis: { md: "12rem" }, mr: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">Chart Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                label="Chart Type"
                value={chartType}
                onChange={handleChartTypeChange}
              >
                <MenuItem value="candle">Candle Stick</MenuItem>
                <MenuItem value="line">Line</MenuItem>
              </Select>
            </FormControl>
          </Box>


          <Box sx={{ minWidth: 120, flexBasis: { md: "12rem" } }}>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">Time Slice</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                label="Time Slice"
                value={timeSlice}
                onChange={(event) => { setTimeSlice(event.target.value) }}
              >
                <MenuItem value="1d">Day</MenuItem>
                <MenuItem value="1w">Week</MenuItem>
                <MenuItem value="1m">Month</MenuItem>
                <MenuItem value="1y">Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          gap: "16px",
          marginTop:"16px",
        }}>

        <TextField
          id="emotion-fields"
          label="emotion level"
          required error={levelValue > max || levelValue < min}
          value={levelValue}
          onChange={handleLevelTextChange}></TextField>
        <Slider
          aria-label="emotion level slider"
          value={levelValue}
          min={min} max={max}
          onChange={handleLevelSliderChange} />
        <TextField id="memo-fields"
          label="memo"
          multiline minRows={7}
          maxRows={7}
          sx={{ width: "100%" }}
          value={memoContent}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMemoContent(event.target.value)
          }}>
        </TextField>
        <Button variant="contained" sx={{ width: "100%" }} onClick={handleSubmitBtnClick}>submit</Button>
      </Box>
    </>
  )
}
